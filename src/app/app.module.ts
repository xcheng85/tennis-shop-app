import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { AuthModule } from './auth/auth.module';
import { CopyrightDirective } from './copyright.directive';
import { AccessControlDirective } from './access-control.directive';
import { AuthInterceptor } from './auth.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RacquetsModule } from './racquets/racquets.module';
import { CoreModule } from './core/core.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    CopyrightDirective,
    AccessControlDirective,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlayersModule, // feature routing module prior to the main app routing module
    RacquetsModule, // feature routing module prior to the main app routing module
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule, // main app routing module
    MatButtonModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    CoreModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
