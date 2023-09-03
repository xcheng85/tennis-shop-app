import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import * as THREE from 'three';
import GUI from 'lil-gui';
import {
  selectTitle,
  selectUrl,
  selectCurrentRoute,
  selectRouteParams,
} from '../state/router.selectors';
import { selectRacquet } from '../state/racquets.selector';
import { InitSceneService } from 'src/app/vizualization-core-three/init-scene.service';
import {
  InitScenePayload,
  PluginCustomizer,
  Resizer,
} from 'src/app/vizualization-core-three/entity';
import { MeshFactoryService } from 'src/app/vizualization-core-three/mesh-factory.service';
import { GuiFactoryService } from 'src/app/vizualization-gui-lil/gui-factory.service';

@Component({
  selector: 'app-racquet-detail',
  templateUrl: './racquet-detail.component.html',
  styleUrls: ['./racquet-detail.component.css'],
})
export class RacquetDetailComponent implements OnInit, AfterViewInit {
  racquet$ = this.store.select(selectRacquet);
  enable3dView = true;

  // should not use ngif, use hidden directive
  @ViewChild('canvas', { read: ElementRef })
  private canvasRef!: ElementRef;

  constructor(
    private store: Store,
    private initSceneServcie: InitSceneService,
    private meshFactory: MeshFactoryService,
    private guiFactory: GuiFactoryService
  ) {}

  ngOnInit(): void {
    this.store.select(selectUrl).subscribe((t) => {
      console.log(t);
    });
    this.store.select(selectRouteParams).subscribe((t) => {
      console.log(t);
    });
    this.store.select(selectRacquet).subscribe((t) => {
      console.log(t);
    });
  }

  ngAfterViewInit(): void {
    const props: InitScenePayload = {
      rt: this.canvasRef.nativeElement,
      backgroundColor: new THREE.Color(0xffffff),
      fogColor: new THREE.Color(0xffffff),
      disableShadows: false,
      disableLights: false,
      disableDefaultControls: false,
    };

    const customizer: PluginCustomizer = ({
      scene,
      camera,
      renderer,
      interactor,
    }) => {
      const geometry = new THREE.BoxGeometry();
      const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
      const cube = new THREE.Mesh(geometry, cubeMaterial);

      cube.position.x = -1;
      cube.castShadow = true;
      scene.add(cube);

      const torusKnotGeom = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 100);
      const torusKnotMat = new THREE.MeshStandardMaterial({
        color: 0x00ff88,
        roughness: 0.1,
      });
      const torusKnotMesh = new THREE.Mesh(torusKnotGeom, torusKnotMat);
      torusKnotMesh.castShadow = true;
      torusKnotMesh.position.x = 2;
      scene.add(torusKnotMesh);

      camera.position.x = -3;
      camera.position.z = 8;
      camera.position.y = 2;
      interactor?.update();

      const floor = this.meshFactory.createPlane();
      scene.add(floor);

      // gui
      const gui = new GUI();
      this.guiFactory.createHelper(gui, scene);

      let step = 0;
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.z += 0.01;

        torusKnotMesh.rotation.x -= 0.01;
        torusKnotMesh.rotation.y += 0.01;
        torusKnotMesh.rotation.z -= 0.01;

        step += 0.04;
        cube.position.x = 4 * Math.cos(step);
        cube.position.y = 4 * Math.abs(Math.sin(step));

        interactor?.update();
      }
      animate();
    };

    const resizer: Resizer = (
      camera: THREE.PerspectiveCamera | THREE.OrthographicCamera,
      renderer: THREE.Renderer
    ) => {
      // type deduction with instance of
      if (camera instanceof THREE.PerspectiveCamera) {
        camera.aspect = window.innerWidth / window.innerHeight;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const fn = this.initSceneServcie.InitScene(props);
    fn(customizer, resizer);
  }

  Toggle3dView() {
    this.enable3dView = !this.enable3dView;
  }
}
