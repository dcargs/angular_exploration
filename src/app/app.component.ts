import { Component } from '@angular/core';
import { Hero } from './hero';

// instead of this you would use express to get the hero data from web server
const HEROES: Hero[] = [
  {id: 1, name: 'Windstorm'},
  {id: 2, name:'Mr. Nice'},
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // where the template html lies
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
