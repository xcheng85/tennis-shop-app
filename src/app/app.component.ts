import { Component, Inject } from '@angular/core';
import { APP_CONFIG, appSettings, AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: APP_CONFIG, useValue: appSettings }], // appcomponent is the root, all the child can access it
})
export class AppComponent {
  title = 'tennis-shop-app';
  // @inject is needed for InjectionToken object
  constructor(@Inject(APP_CONFIG) config: AppConfig) {}
}
