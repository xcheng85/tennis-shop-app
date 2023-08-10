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
dddayers
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
ayers

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

```shell
ng generate service grandslam-player
```

9. MultiVersion of service provider
```shell
ng generate service grandslam-player-v1
```

10. AppConfig and DI
InjectionToken: like key in the ioc

## Observables
async: 
1. backend api
2. reading from file system

callback hell -> promise (chain of then)

promise limitations:
1. cannot cancel
2. immediately execute
3. one-time
4. respond with one value


observable

next(): emit streams of events

observable pattern

rxjs operators: works with observables(event)
1. transform
2. filter
3. combine events

create observables
1. fromEvents: html events
2. of
3. from

transform observables
1. pipe: combine multiple operatoers
2. map:
3. filter
4. tap: do nothing operator

high-order observables
1. switchMap: read from source observable and emit new observable, like a switch. cancels current inner observable and switch to a new one.
2. mergeMap: merges all inner observable into 1. 

reactive: consume. digest and transform async data streams
rxjs: js lib

router and httpclient is coupled with observable

### clean up observables

subscribe == memory

1. in the ngDestroy hook point
2. use subject and takeUntil RxJS Operator to Manage Subscriptions Declaratively
3. async pipe, in the html (players$ | async)!


## HTTP Client
rxjs observable stream

browser fetch API: promise-based

HTTP client: wrapper on top of fetch promised api with observables

Another module HttpClientModule:
1. HttpClient service: return observables


DTO: transform from response to entity


## Auth
```shell
ng generate module auth
ng generate service auth
# ot
ng generate component auth -export
```

beartoken in Authorization header

interceptors: angular service 
like middleware
1. custom header
2. loading indicator
3. logging 
```shell
ng generate interceptor auth
```
register with app module

injection token: HTTP_INTERCEPTORS, 2nd one besides the appConfig

impl interface: HttpInterceptor

## Routing
Angular router: handle changes on clientside, SPA

base path in the index.html
browser support: evergreen , pushstate

app.routing.module.ts

### Routing for DDD

routing in a domain module: player

ddd for routing: create routing module in the domin: players

forRoot: main app module

forChild: domain module

```shell
ng generate component page-not-found
```

set default path for the route

route path: order of specific


navigate declarative vs imperatively

delarative: in the route module
imperative: in the component 
Router service injected


routerLinkActive directive: (sytle directive)

### routing with params
master-detail 
TO the detail component, injectable ActivatedRoute service: get current active route

### routing with qs params
ActivatedRoute.queryParamMap: track qs


### master detail with childRouter
value ? avoid detail component destroy and recreate.
reuse the same detail component for different data in the data list.

router-outlet

### angular guard to route access

### angular guard to guard navigating away

### prefetch 

resolver

```shell
xiao@xiao-Alienware-m15-Ryzen-Ed-R5:~/tennis-shop-app/src/app/players$ touch player-detail.resolver.ts
```

## lazy loading module
```shell
ng generate module support
ng generate component support-info
```

lazy loaded module is in separate bundle, not in the main bundle
check network tab

lazy loaded module have separator injector, which will cause two angular service instance. (prefer stateless service)

### access control for lazy loaded module
CanLoadFn deprecated.
CanMatch instead


## Form
use cases: 
1. login
2. payment
3. book
4. advanced search

form data --> local storage 
form data --> rest api

validation, errors

angular forms:
1. template-driven
2. reactive forms

form: form, input, button


### use reactive form to create player

    FormsModule: temlate-driver
    ReactiveFormsModule: reactive 

```shell
ng generate component create-player
```

directive: 
formGroup: connection FormGroup instance to a form html element
formControlName directive: connect FormControl to a input element


hiearachical formgroups

validators:
1. required

### use angular service: FormBuilder to create form
```shell
ng generate component create-player-v2
```
