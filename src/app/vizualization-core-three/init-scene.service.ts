import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { InitScenePayload, Resizer, PluginCustomizer } from './entity';

@Injectable({
  providedIn: 'root',
})
export class InitSceneService {
  constructor() {}

  // high order function, return function
  InitScene({
    rt,
    backgroundColor,
    fogColor,
    disableLights,
    disableShadows,
    disableDefaultControls,
  }: InitScenePayload) {
    return (customizer: PluginCustomizer, resizer: Resizer) => {
      const scene = new THREE.Scene();
      if (backgroundColor) {
        scene.background = backgroundColor;
      }

      if (fogColor) {
        scene.fog = new THREE.Fog(fogColor, 0.0025, 50);
      }

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({
        canvas: rt,
        antialias: true,
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.VSMShadowMap;
      renderer.setClearColor(backgroundColor);
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.registerResizer(resizer, camera, renderer);

      let orbitControls;
      if (!disableDefaultControls) {
        orbitControls = this.initOrbitControls(camera, renderer);
      }

      if (!disableLights ?? false) {
        this.initLighting(scene, disableShadows);
      }

      customizer({ scene, camera, renderer, interactor: orbitControls });
    };
  }

  registerResizer(
    resizer: Resizer,
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera,
    renderer: THREE.Renderer
  ) {
    // adaptor pattern
    window.addEventListener(
      'resize',
      () => {
        resizer(camera, renderer);
      },
      false
    );
  }

  private initOrbitControls(camera: THREE.Camera, renderer: THREE.Renderer) {
    const controller = new OrbitControls(camera, renderer.domElement);
    controller.enableDamping = true;
    controller.dampingFactor = 0.05;
    controller.minDistance = 1;
    controller.maxDistance = 100;
    controller.minPolarAngle = Math.PI / 4;
    controller.maxPolarAngle = (3 * Math.PI) / 4;

    return controller;
  }

  private initLighting(scene: THREE.Scene, disableShadows: boolean) {
    scene.add(new THREE.AmbientLight(0x666666));
    const dirLight = new THREE.DirectionalLight(0xaaaaaa);
    dirLight.position.set(5, 12, 8);
    dirLight.castShadow = !disableShadows ? true : false;
    dirLight.intensity = 1;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 200;
    dirLight.shadow.camera.right = 10;
    dirLight.shadow.camera.left = -10;
    dirLight.shadow.camera.top = 10;
    dirLight.shadow.camera.bottom = -10;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.radius = 4;
    dirLight.shadow.bias = -0.00005;
    scene.add(dirLight);
  }
}
