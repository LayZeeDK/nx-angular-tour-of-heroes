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
  heroes$: Observable<Hero[]> = this.service.getHeroes();
  selectedId = this.route.paramMap.pipe(
    map((params) => parseInt(params.get('id') ?? '-1', 10))
  );

  constructor(private service: HeroService, private route: ActivatedRoute) {}
}
