import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player';

@Pipe({
  name: 'sortPlayerByCountry',
})
export class SortPlayerByCountryPipe implements PipeTransform {
  transform(players: Player[]): Player[] {
    if (players) {
      return players.sort((a, b) => {
        // ascending by country
        return a.country < b.country ? -1 : 1;
      });
    }
    return [];
  }
}
