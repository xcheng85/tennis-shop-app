import { Component, OnInit, Self, Host, Optional } from '@angular/core';
import { Player } from '../player';
import { PlayersService } from '../players.service';
import { GrandslamPlayerService } from '../grandslam-player.service';

@Component({
  selector: 'app-grandslams',
  templateUrl: './grandslams.component.html',
  styleUrls: ['./grandslams.component.css'],
  providers: [{ provide: PlayersService, useClass: GrandslamPlayerService }],
})
export class GrandslamsComponent implements OnInit {
  grandslams: Player[] = [];
  // use parent component's service instance
  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.grandslams = this.playersService.getPlayers();
  }
}
