import {
  SpectacularAppComponent,
  SpectacularFeatureTestingModule,
} from '@ngworker/spectacular';
import { render, RenderResult } from '@testing-library/angular';
import user from '@testing-library/user-event';
import { HEROES } from '@tour-of-heroes/heroes/data-access';
import {
  heroesDefaultRoutePath,
  heroesRoutes,
} from '@tour-of-heroes/heroes/feature-shell';
import { PageNotFoundModule } from '@tour-of-heroes/shared/ui-navigation';

import { HeroesFeaturePageModule } from './heroes-feature-page.module';

describe('Heroes page feature', () => {
  beforeEach(async () => {
    view = await render(SpectacularAppComponent, {
      imports: [
        SpectacularFeatureTestingModule.withFeature({
          featureModule: HeroesFeaturePageModule,
          featurePath,
        }),
      ],
      routes: [
        ...heroesRoutes,
        { path: '**', loadChildren: () => PageNotFoundModule },
      ],
    });
  });

  const detailPath = 'superhero';
  const featurePath = heroesDefaultRoutePath;
  const [expectedHero] = HEROES;
  const expectedHeroName = new RegExp(expectedHero.name, 'i');
  let view: RenderResult<SpectacularAppComponent, SpectacularAppComponent>;

  it('displays heroes', async () => {
    await view.navigate('/', featurePath);
    const heroes = await view.findAllByRole('listitem');

    expect(heroes.length).toBe(HEROES.length);
  });

  it('1st hero matches 1st test hero', async () => {
    await view.navigate('/', featurePath);
    const [actualHero] = await view.findAllByRole('listitem');

    expect(actualHero)
      .withContext('hero.id')
      .toHaveTextContent(new RegExp('^' + expectedHero.id));
    expect(actualHero)
      .withContext('hero.name')
      .toHaveTextContent(expectedHeroName);
  });

  it('navigates to selected hero detail on click', async () => {
    await view.navigate('/', featurePath);

    user.click(
      await view.findByRole('link', {
        name: expectedHeroName,
      })
    );

    expect(
      await view.findByRole('heading', { name: expectedHeroName })
    ).toBeInTheDocument();
  });

  it('the sidekicks button is broken', async () => {
    await view.navigate('/', featurePath);

    user.click(
      await view.findByRole('button', {
        name: /sidekicks/i,
      })
    );

    expect(
      await view.findByRole('heading', { name: /not found/i })
    ).toBeInTheDocument();
  });

  it('the hero is highlighted when going back from detail', async () => {
    await view.navigate(`/${expectedHero.id}`, detailPath);

    user.click(await view.findByRole('button', { name: /back/i }));

    const actualHero = await view.findByRole('link', {
      name: expectedHeroName,
    });
    expect(actualHero.closest('.selected')).toBeInTheDocument();
  });
});
