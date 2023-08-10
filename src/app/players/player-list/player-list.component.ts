import {
  Component,
  AfterViewInit,
  ViewChild,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayersService],
})
export class PlayerListComponent implements AfterViewInit, OnInit, OnDestroy {
  currentStyles = {
    color: 'blue',
    width: '88px',
  };
  selectedPlayer: Player | undefined;
  players$: Observable<Player[]> | undefined;

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

  private playersSub: Subscription | undefined;

  constructor(private playersService: PlayersService) {}

  onPlayerLiked(name: string) {
    window.alert(`You just liked ${name}!`);
  }

  ngOnInit(): void {
    this.players$ = this.playersService.getPlayers();
  }

  ngAfterViewInit(): void {
    if (this.playerDetail) {
      console.info(this.playerDetail.Name);
    }
  }

  ngOnDestroy(): void {
    // not needed
    // this.playersSub?.unsubscribe();
  }

  onAdd(player: Player) {
    // re-fetch
    this.players$ = this.playersService.getPlayers();
  }
}
