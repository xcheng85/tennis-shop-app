import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayersService } from '../players.service';
import { Player } from '../player';
import { titleRangeValidator } from '../title-range-validator.directive';

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
      validators: Validators.required,
    }),
    country: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    grandslams: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.required, titleRangeValidator()]
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
