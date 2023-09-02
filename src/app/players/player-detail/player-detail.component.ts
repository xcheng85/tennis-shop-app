import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
// profile is a must
import '@kitware/vtk.js/Rendering/Profiles/Geometry';
import '@kitware/vtk.js/Rendering/Profiles/Volume';
import vtkFullScreenRenderWindow from '@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow';
import vtkRenderWindow from '@kitware/vtk.js/Rendering/Core/RenderWindow';
import vtkOpenGLRenderWindow from '@kitware/vtk.js/Rendering/OpenGL/RenderWindow';
import vtkConeSource from '@kitware/vtk.js/Filters/Sources/ConeSource';
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer';
import vtkRenderWindowInteractor from '@kitware/vtk.js/Rendering/Core/RenderWindowInteractor';
import vtkInteractorStyleTrackballCamera from '@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera';

import { Player } from '../player';
import { AuthService } from '../../auth/auth.service';
import { switchMap } from 'rxjs';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerDetailComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('vtkDiv', { read: ElementRef }) vtkDiv!: ElementRef;

  fullscreenRenderWindow: vtkFullScreenRenderWindow | null = null;
  vtkRenderWindow!: vtkRenderWindow;
  openglRenderWindow!: vtkOpenGLRenderWindow;

  @Input() player: Player | undefined;
  @Output() liked = new EventEmitter<string>();
  player$: Observable<Player> | undefined;
  constructor(
    private playerService: PlayersService,
    public authService: AuthService,
    private route: ActivatedRoute
  ) {}

  like() {
    this.liked.emit(this.player?.name);
  }

  get Name(): string | undefined {
    console.info(`player's name: ${this.player?.name}`);
    return this.player?.name;
  }

  ngOnInit(): void {
    // // observable for all the route params
    // // paramMap: kv pair for all the routing params
    // this.route.paramMap
    //   .pipe(
    //     switchMap((params) => {
    //       // fetch the routing param: id
    //       return this.playerService.getPlayer(params.get('id') as string);
    //     })
    //   )
    //   .subscribe((p) => (this.player = p));

    // route prefetching
    this.player$ = this.route.data.pipe(
      // key: player must match the players-routing.module.ts
      switchMap((data) => of(data['player']))
    );
  }

  ngAfterViewInit(): void {
    let container = this.vtkDiv.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;
    try {
      this.vtkRenderWindow = vtkRenderWindow.newInstance();
    } catch (e) {
      console.error('vtkrenderWindow newInstance error');
    }
    this.openglRenderWindow = vtkOpenGLRenderWindow.newInstance();
    this.openglRenderWindow.setContainer(container);
    this.openglRenderWindow.setSize(width, height);
    this.vtkRenderWindow.addView(this.openglRenderWindow);

    const coneSource = vtkConeSource.newInstance();
    const actor = vtkActor.newInstance();
    const mapper = vtkMapper.newInstance();
    actor.setMapper(mapper);
    mapper.setInputConnection(coneSource.getOutputPort());
    const renderer = vtkRenderer.newInstance();
    this.vtkRenderWindow.addRenderer(renderer);

    const interactor = vtkRenderWindowInteractor.newInstance();
    interactor.setInteractorStyle(
      vtkInteractorStyleTrackballCamera.newInstance()
    );
    interactor.setView(this.openglRenderWindow);
    interactor.initialize();
    interactor.bindEvents(container);
    renderer.addActor(actor);
    renderer.resetCamera();
    this.vtkRenderWindow.render();
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
