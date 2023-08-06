import { Component } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {
  currentStyles = {
    color: "blue",
    width: "88px"
  }
  selectedPlayer = '';

  onPlayerLiked(name: string){
    window.alert(`You just liked ${name}!`);
  }
}
