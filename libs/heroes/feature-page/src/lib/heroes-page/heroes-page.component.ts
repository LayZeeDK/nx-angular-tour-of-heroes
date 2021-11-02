// TODO: Feature Componetized like CrisisCenter
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '@tour-of-heroes/heroes/data-access';
import { Hero } from '@tour-of-heroes/heroes/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css'],
})
export class HeroesPageComponent {
  addedHeroes: Hero[] = [];
  heroes$: Observable<Hero[]> = this.heroService.getHeroes();
  selectedId: Observable<number> = this.route.paramMap.pipe(
    map((params) => parseInt(params.get('id') ?? '', 10))
  );

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  add(name: string): void {
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.addedHeroes = [...this.addedHeroes, hero];
    });
  }

  allHeroes(serverHeroes: Hero[]): Hero[] {
    return [...serverHeroes, ...this.addedHeroes];
  }
}
