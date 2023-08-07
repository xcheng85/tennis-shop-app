import { Component, Input, OnInit } from '@angular/core';
import { PlayerViewService } from '../player-view.service';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css'],
  providers: [PlayerViewService],
})
export class PlayerViewComponent implements OnInit {
  @Input() id = -1;
  name = '';

  constructor(private playerViewService: PlayerViewService) {}

  ngOnInit(): void {
    const player = this.playerViewService.getPlayer(this.id);
    if (player) {
      this.name = player.name;
    }
  }
}
