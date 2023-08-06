import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerDetailComponent implements OnChanges {
  @Input() player: Player | undefined;
  @Output() liked = new EventEmitter<string>();

  like() {
    this.liked.emit(this.player?.name);
  }

  get Name(): string | undefined {
    console.info(`player's name: ${this.player?.name}`);
    return this.player?.name;
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
