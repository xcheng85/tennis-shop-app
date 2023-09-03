export interface Resizer
{
    (camera: THREE.PerspectiveCamera | THREE.OrthographicCamera, renderer: THREE.Renderer): void;
};