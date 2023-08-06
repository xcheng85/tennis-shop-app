import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';
import { Player } from '../player';

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
  selectedPlayer: Player | undefined;
  players: Player[] = [
    {
      name: 'Roger Federer',
      country: 'Swiss',
    },
    {
      name: 'Rafa Nadal',
      country: 'Spain',
    },
    {
      name: 'Novak Djorkvic',
      country: 'Serbian',
    },
    {
      name: 'ZhiZheng Zhang',
      country: 'China',
    },
  ];

  grandslams = {
    'Australia': 'Hard court',
    'French': 'Clay court',
    'Wimbleton': 'Grass court',
    'US': 'Hard court'
  }

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
