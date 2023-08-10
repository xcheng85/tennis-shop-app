import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlayersService } from '../players.service';
import { Player } from '../player';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css'],
})
export class CreatePlayerComponent {
  @Output() playerAdded = new EventEmitter<Player>();
  playerForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
    }),
    country: new FormControl('', {
      nonNullable: true,
    }),
    grandslams: new FormControl<number>(0, {
      nonNullable: true,
    }),
  });

  constructor(private playersService: PlayersService) {}

  get name() {
    return this.playerForm.controls.name;
  }
  get country() {
    return this.playerForm.controls.country;
  }
  get grandslams() {
    return this.playerForm.controls.grandslams;
  }

  createPlayer() {
    // get the value from formControl
    this.playersService
      .addPlayer(this.name.value, this.country.value, this.grandslams.value)
      .subscribe((player) => {
        this.playerForm.reset();
        this.playerAdded.emit(player);
      });
  }
}
