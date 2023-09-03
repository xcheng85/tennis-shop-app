# Design around angular + three.js

## command

```shell
# module for core functions
ng generate module vizualization-core-three

# 

```


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

