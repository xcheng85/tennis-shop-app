import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { CopyrightDirective } from './copyright.directive';

@NgModule({
  declarations: [AppComponent, CopyrightDirective],
  imports: [BrowserModule, PlayersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
