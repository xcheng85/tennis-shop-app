import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayersService],
})
export class PlayerListComponent implements AfterViewInit, OnInit {
  currentStyles = {
    color: 'blue',
    width: '88px',
  };
  selectedPlayer: Player | undefined;
  players: Player[] = [];

  grandslams = {
    Australia: 'Hard court',
    French: 'Clay court',
    Wimbleton: 'Grass court',
    US: 'Hard court',
  };

  // property decorator
  @ViewChild(PlayerDetailComponent) playerDetail:
    | PlayerDetailComponent
    | undefined;

  constructor(private playersService: PlayersService) {}

  onPlayerLiked(name: string) {
    window.alert(`You just liked ${name}!`);
  }

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe((players) => {
      this.players = players;
    });
  }

  ngAfterViewInit(): void {
    if (this.playerDetail) {
      console.info(this.playerDetail.Name);
    }
  }
}
