import { Component, OnInit, Self, Host, Optional } from '@angular/core';
import { Player } from '../player';
import { PlayersService } from '../players.service';
import { GrandslamPlayerService } from '../grandslam-player.service';
// import { grandslamPlayersFactory } from '../grandslam-player';

@Component({
  selector: 'app-grandslams',
  templateUrl: './grandslams.component.html',
  styleUrls: ['./grandslams.component.css'],
  providers: [{ provide: PlayersService, useClass: GrandslamPlayerService }],
  // providers: [
  //   {
  //     provide: PlayersService,
  //     useFactory: grandslamPlayersFactory('v1'),
  //   },
  // ],
})
export class GrandslamsComponent implements OnInit {
  grandslams: Player[] = [];
  // use parent component's service instance
  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe((grandslams) => {
      this.grandslams = grandslams;
    });
  }
}
