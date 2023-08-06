import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@Directive({
  selector: '[appPlayerHost]',
})
export class PlayerHostDirective implements OnInit {
  // ViewContainerRef is angular service, di
  constructor(private vc: ViewContainerRef) {}

  ngOnInit(): void {
    // dynamically create angular component
    const playerRef = this.vc.createComponent(PlayerDetailComponent);
    playerRef.setInput('player', {
      name: 'Pete Sampras',
      country: 'United States'
    })
  }
}
