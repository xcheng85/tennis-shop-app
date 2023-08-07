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
input/output/eventemitter

### template reference virable

### css style
scoped styling
boundaries through view encapsulation

### change detection and re-render
onPush

### component event hook
all the interfaces that needs to implement by the component class

constructor
ngOnInit(): safe and inited, fetch data from DI services
ngOnDestroy():
1. structrue directive: ngif
2. routing navigation
unsubscirbe from observable streams

ngOnChanges(): detect input binding changes

AfterViewInit hook: when parent and child component are initialized

### parent component acccess child component
ViewChild property decorator


## Directive

structural directives: *ngIf, *ngFor, *ngSwitch

ngif + ng-template

ngFor: index, even/odd, first/last
For performance, angular object identity

## Pipe
manipulate at the html level

interface for player domain/entity, special interface in ts

```shell
ng generate interface player
```

built-in:
uppercase/lowercase
percent
currency
slice
date
json
async
keyvalue

### custom pipe
```
ng generate pipe sort-by-country
```

interface: PipeTransform
the transform stream in node.js

### pipe with change detection and reducer style, immutable
reference change concept


### custom directive
modify appearance of dom element through access the html element


component = directive + view

directive selector == component selector

structural directive
attribute directive

example1: copyright in the footer

```shell
# register with app module
ng generate directive copyright
```

ex2: tooltips
ex3: collapsible
ex4: infinite scrolling

ex5: custom validation (property binding and responding to events)
two angular decorators:
@HostBinding: for html element properties: such as css class
@HostListener: for html event


ex6: use directives to achor dynamic angular component (without selector)
ng-template + directive
```
cd ./src/app/players
ng generate directive playerHost
```

ex7: toggle templates dynamiclly (Access controll)
```
ng generate directive access-control
```

## service and di
injector: ioc container in golang, inversify, asp.net core
interface and implementation

service: globle, not tied to modules
ddd. 

@injectable decorator
service can be injected to components, directive, another service
root injector: like ioc container

constructor injection pattern;
method injection pattern in asp.net core

### How to search the deps
1. from the parent component
2. not found, all the way to the root injector


1. create player service

```shell
cd src/app/players
ng generate service players

```

2. root inject service
singleton
3. component inject service
scoped, and copies

4. if root inject and component inject ths same service, component will create a new copy with scope limiting to all its children and itself

```shell
# component for all the grandslam winners
ng generate component grandslams
```

5. component injector service for local cache
```shell
ng generate component player-view
ng generate service player-view
```

6. restrict service dependency accss (down)
only direct children
  providers: [PlayersService] -->   viewProviders: [PlayersService]

7. di decorator for params
@Host
@Optional
@Self

8. Override provider
register different impl of the same service interface

```
ng generate service grandslam-player
```


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
