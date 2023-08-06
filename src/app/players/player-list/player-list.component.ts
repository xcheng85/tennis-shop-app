import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements AfterViewInit {
  currentStyles = {
    color: 'blue',
    width: '88px',
  };
  selectedPlayer = '';
  players = ['Roger Federer', 'Rafa Nadal', 'Novak Djorkvic'];

  // property decorator
  @ViewChild(PlayerDetailComponent) playerDetail:
    | PlayerDetailComponent
    | undefined;

  onPlayerLiked(name: string) {
    window.alert(`You just liked ${name}!`);
  }

  ngAfterViewInit(): void {
    if (this.playerDetail) {
      console.info(this.playerDetail.Name);
    }
  }
}
