import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as THREE from 'three';
import GUI from 'lil-gui';

@Injectable({
  providedIn: 'root',
})
export class GuiFactoryService {
  axisHelperName = 'axisHelper';
  gridHelperName = 'gridHelper';
  polarGridHelperName = 'polarGridHelper';

  registerGuiCallback = (parent: THREE.Group | THREE.Scene) => ({
    axisHelper: {
      toggle: () =>
        this.removeOrAddToParent(
          this.gridHelperName,
          parent,
          this.axisHelper.bind(this)
        ),
    },
    gridHelper: {
      toggle: () =>
        this.removeOrAddToParent(
          this.gridHelperName,
          parent,
          this.gridHelper.bind(this)
        ),
    },
    polarGridHelper: {
      toggle: () =>
        this.removeOrAddToParent(
          this.polarGridHelperName,
          parent,
          this.polarGridHelper.bind(this)
        ),
    },
  });

  constructor() {}

  public createHelper(root: GUI, parent: THREE.Group | THREE.Scene) {
    const cb = this.registerGuiCallback(parent);
    const helpers = root.addFolder('Helpers');
    //   helpers.add('axisHelperEnabled', propertiesObject)
    helpers.add(cb.axisHelper, 'toggle').name('Toggle AxesHelper');
    helpers.add(cb.gridHelper, 'toggle').name('Toggle GridHelper');
    helpers.add(cb.polarGridHelper, 'toggle').name('Toggle PolarGridHelper');

    helpers.close();
  }
  // create and add axis helper to the parent
  private axisHelper(parent: THREE.Group | THREE.Scene) {
    const axesHelper = new THREE.AxesHelper(5);
    // without .bind(this), this will be undefined
    // .bind(this) or use arrow functioin
    axesHelper.name = this.axisHelperName;
    parent.add(axesHelper);
  }

  private gridHelper(parent: THREE.Group | THREE.Scene) {
    const size = 10;
    const divisions = 10;
    const gridHelper = new THREE.GridHelper(size, divisions);
    gridHelper.name = this.gridHelperName;
    parent.add(gridHelper);
  }

  private polarGridHelper(parent: THREE.Group | THREE.Scene) {
    const radius = 10;
    const radials = 16;
    const circles = 8;
    const divisions = 64;
    const polarGridHelper = new THREE.PolarGridHelper(
      radius,
      radials,
      circles,
      divisions
    );
    polarGridHelper.name = this.polarGridHelperName;
    parent.add(polarGridHelper);
  }

  private removeOrAddToParent(
    name: string,
    parent: THREE.Group | THREE.Scene,
    addGuiComponentFn: (parent: THREE.Group | THREE.Scene) => void
  ) {
    const currentObject = parent.getObjectByName(name);
    console.log(currentObject);
    if (currentObject) {
      parent.remove(currentObject);
    } else {
      addGuiComponentFn(parent);
    }
  }
}
