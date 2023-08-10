import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { AuthModule } from './auth/auth.module';
import { CopyrightDirective } from './copyright.directive';
import { AccessControlDirective } from './access-control.directive';
import { AuthInterceptor } from './auth.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

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
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule, // main app routing module
    MatButtonModule,
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
