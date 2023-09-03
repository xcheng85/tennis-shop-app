import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { InitScenePayload, Resizer, PluginCustomizer } from './entity';

@Injectable({
  providedIn: 'root',
})
export class MeshFactoryService {
  constructor() {}

  public createPlane() {
    const geo = new THREE.PlaneGeometry(10000, 10000);
    const mat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(0, -2, 0);
    mesh.rotation.set(Math.PI / -2, 0, 0);
    mesh.receiveShadow = true;
    mesh.name = 'plane-from-factory';
    return mesh;
  }

  public createfloatingFloor() {
    const geo = new THREE.PlaneGeometry(10000, 10000);
    const mat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(0, -2, 0);
    mesh.rotation.set(Math.PI / -2, 0, 0);
    mesh.receiveShadow = true;
    mesh.name = 'floating-floor-from-factory';
    return mesh;
  }
}
