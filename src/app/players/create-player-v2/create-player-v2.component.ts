import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PlayersService } from '../players.service';
import { Player } from '../player';

@Component({
  selector: 'app-create-player-v2',
  templateUrl: './create-player-v2.component.html',
  styleUrls: ['./create-player-v2.component.css'],
})
export class CreatePlayerV2Component {
  @Output() playerAdded = new EventEmitter<Player>();
  // | undefined is needed
  playerForm: FormGroup<{
    name: FormControl<string>;
    country: FormControl<string>;
    grandslams: FormControl<number>;
  }>;
  // inject FormBuilder service
  constructor(
    private playersService: PlayersService,
    private formBuilder: FormBuilder
  ) {
    // * Returns a FormBuilder in which automatically constructed `FormControl` elements
    // * have `{nonNullable: true}` and are non-nullable.
    this.playerForm = this.formBuilder.nonNullable.group({
      name: this.formBuilder.nonNullable.control(''),
      country: this.formBuilder.nonNullable.control(''),
      grandslams: this.formBuilder.nonNullable.control(0),
    });
  }

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
