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

@NgModule({
  declarations: [AppComponent, CopyrightDirective, AccessControlDirective],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlayersModule,
    AuthModule,
    AppRoutingModule,
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
