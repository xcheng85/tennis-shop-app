import {InjectionToken} from '@angular/core';


export interface AppConfig {
  title: string;
  version: string;
  author: string;
}

export const appSettings: AppConfig = {
  title: 'tennis-shop-app',
  version: '0.0.1',
  author: 'Xiao Cheng',
};

// create the key for the ioc container
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');