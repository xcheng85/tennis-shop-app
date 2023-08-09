import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Player } from '../player';
import { AuthService } from '../../auth/auth.service';
import { switchMap } from 'rxjs';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerDetailComponent implements OnInit, OnChanges {
  @Input() player: Player | undefined;
  @Output() liked = new EventEmitter<string>();
  player$: Observable<Player> | undefined;
  constructor(
    private playerService: PlayersService,
    public authService: AuthService,
    private route: ActivatedRoute
  ) {}

  like() {
    this.liked.emit(this.player?.name);
  }

  get Name(): string | undefined {
    console.info(`player's name: ${this.player?.name}`);
    return this.player?.name;
  }

  ngOnInit(): void {
    // // observable for all the route params
    // // paramMap: kv pair for all the routing params
    // this.route.paramMap
    //   .pipe(
    //     switchMap((params) => {
    //       // fetch the routing param: id
    //       return this.playerService.getPlayer(params.get('id') as string);
    //     })
    //   )
    //   .subscribe((p) => (this.player = p));

    // route prefetching
    this.player$ = this.route.data.pipe(
      // key: player must match the players-routing.module.ts
      switchMap(data => of(data['player']))
    );
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
