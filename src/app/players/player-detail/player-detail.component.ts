import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerDetailComponent {
  @Input() name = '';
  @Output() liked = new EventEmitter<string>();

  like() {
    this.liked.emit(this.name);
  }

  get Name(): string {
    console.info(`player's name: ${this.name}`);
    return this.name;
  }
}
