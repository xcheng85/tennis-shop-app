import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PlayerViewService } from '../player-view.service';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css'],
  providers: [PlayerViewService],
})
export class PlayerViewComponent implements OnInit, OnDestroy {
  @Input() id = -1;
  name = '';

  private playerSub = new Subject<void>();

  constructor(private playerViewService: PlayerViewService) {}

  ngOnInit(): void {
    const player = this.playerViewService
      .getPlayer(this.id)
      .pipe(takeUntil(this.playerSub))
      .subscribe((player) => {
        if (player) {
          this.name = player.name;
        }
      });
  }

  ngOnDestroy(): void {
    this.playerSub.next();
    this.playerSub.complete();
  }
}
