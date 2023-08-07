import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { AuthModule } from './auth/auth.module';
import { CopyrightDirective } from './copyright.directive';
import { AccessControlDirective } from './access-control.directive';

@NgModule({
  declarations: [AppComponent, CopyrightDirective, AccessControlDirective],
  imports: [BrowserModule, HttpClientModule, PlayersModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
