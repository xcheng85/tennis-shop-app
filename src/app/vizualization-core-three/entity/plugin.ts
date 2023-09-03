import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// payload exposed to the app to operator
export interface PluginPayload {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    renderer: THREE.Renderer;
    interactor?: OrbitControls | null | undefined; // extensible to other controls
}

export interface PluginCustomizer
{
    (payload: PluginPayload): void;
};