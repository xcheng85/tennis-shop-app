import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
})
export class PlayerDetailComponent {
  @Input() name = '';
  @Output() liked = new EventEmitter<string>();

  like() {
    this.liked.emit(this.name);
  }
}
