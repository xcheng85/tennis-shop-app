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

  rendererEnums = {
    toneMappingOptions: {
      None: THREE.NoToneMapping,
      Linear: THREE.LinearToneMapping,
      Reinhard: THREE.ReinhardToneMapping,
      Cineon: THREE.CineonToneMapping,
      ACESFilmic: THREE.ACESFilmicToneMapping,
      Custom: THREE.CustomToneMapping,
    },
    shadowMapping: {
      Basic: THREE.BasicShadowMap,
      PCFS: THREE.PCFShadowMap,
      PCFSoft: THREE.PCFSoftShadowMap,
      VSM: THREE.VSMShadowMap,
    },
    outputEncodings: {
      Linear: THREE.LinearSRGBColorSpace,
      sRGB: THREE.SRGBColorSpace,
    },
  };
  registerRendererCallback = (webGLRenderer: THREE.WebGLRenderer) => {
    const clearColorHolder = new THREE.Color();
    webGLRenderer.getClearColor(clearColorHolder);

    return {
      main: {
        outputColorSpace: webGLRenderer.outputColorSpace,
      },
      shadowMap: {
        enabled: webGLRenderer.shadowMap.enabled,
        autoUpdate: webGLRenderer.shadowMap.autoUpdate,
        needsUpdate: () => (webGLRenderer.shadowMap.needsUpdate = true),
        type: webGLRenderer.shadowMap.type,
      },
      toneMapping: {
        exposure: webGLRenderer.toneMappingExposure,
        toneMapping: webGLRenderer.toneMapping,
      },
      clearSettings: {
        autoClear: webGLRenderer.autoClear,
        clearColor: clearColorHolder.getStyle(),
      },
      advanced: {
        autoClearDepth: webGLRenderer.autoClearDepth,
        autoClearStencil: webGLRenderer.autoClearStencil,
        checkShaderErrors: webGLRenderer.debug.checkShaderErrors,
        sortObjects: webGLRenderer.sortObjects,
        localClippingEnabled: webGLRenderer.localClippingEnabled,
      },
    };
  };

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

  public createRenderer(root: GUI, renderer: THREE.WebGLRenderer) {
    const cb = this.registerRendererCallback(renderer);

    const rendererFolder = root.addFolder('WebGLRenderer');
    rendererFolder.add(
      cb.main,
      'outputEncoding',
      this.rendererEnums.outputEncodings
    );
    // and subfolder changes, refresh update
    rendererFolder.onChange((_) => {
      this.updateWebGLRendererProperties(renderer, cb);
    });

    const shadowFolder = rendererFolder.addFolder('Shadow');
    shadowFolder.add(cb.shadowMap, 'enabled');
    shadowFolder.add(cb.shadowMap, 'autoUpdate');
    shadowFolder.add(cb.shadowMap, 'needsUpdate');
    shadowFolder
      .add(cb.shadowMap, 'type', this.rendererEnums.shadowMapping)
      .enable(false);

    const toneMappingFolder = rendererFolder.addFolder('ToneMapping');
    toneMappingFolder.add(cb.toneMapping, 'exposure', 0, 2);
    toneMappingFolder.add(
      cb.toneMapping,
      'toneMapping',
      this.rendererEnums.toneMappingOptions
    );

    const clearSettingsFolder = rendererFolder.addFolder('clearSettings');
    clearSettingsFolder.add(cb.clearSettings, 'autoClear');
    clearSettingsFolder.addColor(cb.clearSettings, 'clearColor');

    rendererFolder.close();
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

  private updateWebGLRendererProperties(
    webGLRenderer: THREE.WebGLRenderer,
    cb: any
  ) {
    webGLRenderer.shadowMap.enabled = cb.shadowMap.enabled;
    webGLRenderer.shadowMap.autoUpdate = cb.shadowMap.autoUpdate;
    webGLRenderer.shadowMap.needsUpdate = cb.shadowMap.needsUpdate;
    webGLRenderer.toneMapping = cb.toneMapping.toneMapping;
    webGLRenderer.toneMappingExposure = cb.toneMapping.exposure;
    webGLRenderer.autoClear = cb.clearSettings.autoClear;
    webGLRenderer.setClearColor(cb.clearSettings.clearColor);
    webGLRenderer.outputColorSpace = cb.main.outputEncoding;
  }
}
