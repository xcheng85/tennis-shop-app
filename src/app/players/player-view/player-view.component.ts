import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  effect,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import * as THREE from 'three';
import { PlayerViewService } from '../player-view.service';
import { PlayerRankService } from '../player-rank.service';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css'],
  providers: [PlayerViewService, PlayerRankService],
})
export class PlayerViewComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() id = -1;
  name = '';

  private playerSub = new Subject<void>();

  @ViewChild('canvas', { read: ElementRef })
  private canvasRef!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private root!: THREE.Group;

  constructor(private playerViewService: PlayerViewService, private rankService: PlayerRankService) {
    effect(() => {
      console.log(rankService.x());
      requestAnimationFrame((timestamp) => this.update(timestamp));
    });
  }

  ngOnInit(): void {
    const player = this.playerViewService
      .getPlayer(this.id)
      .pipe(takeUntil(this.playerSub))
      .subscribe((player) => {
        if (player) {
          this.name = player.name;
        }
      });
  }

  ngAfterViewInit(): void {
    this.createScene();
  }

  ngOnDestroy(): void {
    this.playerSub.next();
    this.playerSub.complete();
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private createScene() {
    let container = this.canvas;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const group = new THREE.Group();
    const material = new THREE.MeshToonMaterial();
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    group.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.x = 2;
    pointLight.position.y = 2;
    pointLight.position.z = 2;
    group.add(pointLight);
    const box = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), material);
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(5, 1.5, 16, 100),
      material
    );
    group.add(torus, box);
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.001, 1000);
    camera.position.z = 30;
    scene.add(camera);
    scene.add(group);

    if (!this.canvasRef) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
    });
    renderer.setSize(width, height);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.root = group;

    // addEventListener('resize', () => {
    //   const width = container.clientWidth;
    //   const height = container.clientHeight;

    //   camera.aspect = width / height;
    //   camera.updateProjectionMatrix();

    //   renderer.setSize(width, height);
    //   renderer.render(scene, camera);
    // });

    // // const clock = new THREE.Clock();

    // const animateGeometry = () => {
    //   renderer.render(scene, camera);
    //   requestAnimationFrame(animateGeometry);
    // };

    // animateGeometry();
  }

  private resize() {
    let container = this.canvas;
    const width = container.clientWidth;
    const height = container.clientHeight;
    let newRenderSize = new THREE.Vector2(width, height);
    let currentRenderSize = new THREE.Vector2(0, 0);
    this.renderer.getSize(currentRenderSize);

    if (
      currentRenderSize.x !== newRenderSize.x ||
      currentRenderSize.y !== newRenderSize.y
    ) {
      this.camera.aspect = newRenderSize.width / newRenderSize.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }
  }

  private update(ts: DOMHighResTimeStamp) {
    console.log('update:', ts);
    this.resize();
    this.renderer.render(this.scene, this.camera);
  }
}
