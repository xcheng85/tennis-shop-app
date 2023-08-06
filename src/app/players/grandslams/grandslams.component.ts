import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-grandslams',
  templateUrl: './grandslams.component.html',
  styleUrls: ['./grandslams.component.css'],
})
export class GrandslamsComponent implements OnInit {
  grandslams: Player[] = [];
  // use parent component's service instance
  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.grandslams = this.playersService
      .getPlayers()
      .filter((p) => p.grandslams > 0);
  }
}
