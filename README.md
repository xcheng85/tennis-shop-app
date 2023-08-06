# TennisShopApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.


## Git
```shell
git remote add origin https://github.com/xcheng85/tennis-shop-app.git
git push origin master
```

## Basic Knowledge
main.ts
app.module.ts
app-root: main component

app module bootstraps app component
main.ts bootstraps app module

Angular Essentials (Version 16) ext

Angular Data immutability

## TS
1. Decorators
2. Interfaces
3. custom type 
4. anonymous function
5. rest parameters: variadic parames
6. function overloading complicated;
7. arrow function and scope. tricky
8. spread parameters
9. fp and the immutablility
10. generics and interface for contracts
11. optional chaining
12. nullish coalescing and ternary operator
13. class Property accessors
14. interface in typescript, both members(schema) and function contracts
15. interface for di and mocking test
16. decorators: class, property, method and parameters of methods
17. partial, record, union

## Angular Module
ddd
main module: AppModule
main module and feature modules

### Feature modules
```shell
# ddd
ng generate module players
cd players
ng generate component player-list
ng generate component player-detail
# automatically registered with players.module

```
link player feature module with main module


```shell
ng generate module racquets
```

raquect module needs a player list like tennis warehouse

export a component publicly to be used by other module -> exports: []

### Core modules
toolbar
footer
loading spinner
shared services: cache, logging

### Shared moduels
component, directive, pipelins, imported to each feature modules
lazy loaded modules

### Built-in modules
BrowserModule
CommonModule: angular template, directive, 

## Components
standalone vs normal

stadalone: prototying and demo

## HTML
1. unordered list: ul li


### Property Binding: class and style
class: css

### Event Binding
DOM events to the method in component class

### Communication between parent and child
input and output

input binding


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
