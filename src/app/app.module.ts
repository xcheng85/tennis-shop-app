import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PlayersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
