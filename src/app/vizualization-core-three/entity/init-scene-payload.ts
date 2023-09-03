import * as THREE from 'three';

export interface InitScenePayload {
    rt: HTMLCanvasElement | OffscreenCanvas, // offscreen
    backgroundColor: THREE.Color;
    fogColor: THREE.Color;
    disableShadows: boolean;
    disableLights: boolean;
    disableDefaultControls: boolean;
}
