// TODO: Feature Componetized like CrisisCenter
import { Component, Input } from '@angular/core';
import { Hero } from '@tour-of-heroes/heroes/domain';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent {
  @Input()
  heroes: Hero[] = [];
  @Input()
  selectedId = 0;
}
