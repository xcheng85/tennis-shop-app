# Design around angular + three.js

## command

```shell
# module for core functions
ng generate module vizualization-core-three

# module for gui
ng generate module vizualization-gui-lil

```
# gui 
dat.gui vs lil-gui

## scene

### scenegraph

Object3D

Group

Mesh

Scene

## camera
THREE.camera: should not be direct used, use union instead and instanceof for type infer

## lights

## mesh
geometry + material

## renderer

offscreen rendering
OffscreenCanvas
workers browser



## js, ts 

bind(this) could be avoid with arror function