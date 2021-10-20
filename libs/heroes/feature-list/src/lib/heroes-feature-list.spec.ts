import { Location } from '@angular/common';
import { SpectacularAppComponent } from '@ngworker/spectacular';
import { render, RenderResult } from '@testing-library/angular';
import user from '@testing-library/user-event';
import { HEROES } from '@tour-of-heroes/heroes/data-access';
import { HeroesFeatureDetailModule } from '@tour-of-heroes/heroes/feature-detail';
import {
  PageNotFoundComponent,
  PageNotFoundModule,
} from '@tour-of-heroes/shared/ui-navigation';

import { HeroesFeatureListModule } from './heroes-feature-list.module';

describe('Heroes list feature', () => {
  beforeEach(async () => {
    view = await render(SpectacularAppComponent, {
      excludeComponentDeclaration: true,
      imports: [PageNotFoundModule],
      routes: [
        { path: featurePath, loadChildren: () => HeroesFeatureListModule },
        { path: detailPath, loadChildren: () => HeroesFeatureDetailModule },
        { path: '**', component: PageNotFoundComponent },
      ],
    });
    const inject = view.fixture.debugElement.injector.get.bind(
      view.fixture.debugElement.injector
    );
    appLocation = inject(Location);
  });

  let appLocation: Location;
  const detailPath = 'hero';
  const featurePath = 'heroes';
  let view: RenderResult<SpectacularAppComponent, SpectacularAppComponent>;

  it('displays heroes', async () => {
    await view.navigate('', featurePath);
    const heroes = await view.findAllByRole('listitem');
    expect(heroes.length).toBeGreaterThan(0);
  });

  it('1st hero matches 1st test hero', async () => {
    const [expectedHero] = HEROES;
    await view.navigate('', featurePath);
    const [actualHero] = await view.findAllByRole('listitem');

    expect(actualHero)
      .withContext('hero.id')
      .toHaveTextContent(expectedHero.id.toString());
    expect(actualHero)
      .withContext('hero.name')
      .toHaveTextContent(expectedHero.name);
  });

  it('navigates to selected hero detail on click', async () => {
    const [expectedHero] = HEROES;
    await view.navigate('', featurePath);
    const heroLink = await view.findByRole('link', {
      name: new RegExp(expectedHero.name, 'i'),
    });

    user.click(heroLink);
    await view.fixture.whenStable();

    expect(appLocation.path())
      .withContext('nav to heroes detail URL')
      .toBe(`/${detailPath}/${expectedHero.id}`);
  });

  it('the sidekicks button is broken', async () => {
    await view.navigate('', featurePath);
    const sidekicksLink = await view.findByRole('button', {
      name: /sidekicks/i,
    });

    user.click(sidekicksLink);

    expect(
      await view.findByRole('heading', { name: /not found/i })
    ).toBeInTheDocument();
  });
});
