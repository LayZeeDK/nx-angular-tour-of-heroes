import { SpectacularAppComponent } from '@ngworker/spectacular';
import { render, RenderResult } from '@testing-library/angular';
import user from '@testing-library/user-event';
import { HEROES } from '@tour-of-heroes/heroes/data-access';
import { heroesRoutes } from '@tour-of-heroes/heroes/feature-shell';
import {
  PageNotFoundComponent,
  PageNotFoundModule,
} from '@tour-of-heroes/shared/ui-navigation';

describe('Heroes list feature', () => {
  beforeEach(async () => {
    view = await render(SpectacularAppComponent, {
      imports: [
        // SpectacularFeatureTestingModule.withRoutes({
        //   routes: [
        //     ...heroesRoutes,
        //     { path: '**', component: PageNotFoundComponent },
        //   ],
        // }),
        PageNotFoundModule,
      ],
      routes: [
        ...heroesRoutes,
        { path: '**', component: PageNotFoundComponent },
      ],
    });
    const inject = view.fixture.debugElement.injector.get.bind(
      view.fixture.debugElement.injector
    );
  });

  const detailPath = 'superhero';
  const featurePath = 'superheroes';
  const [expectedHero] = HEROES;
  const expectedHeroName = new RegExp(expectedHero.name, 'i');
  let view: RenderResult<SpectacularAppComponent, SpectacularAppComponent>;

  it('displays heroes', async () => {
    await view.navigate('/', featurePath);
    const heroes = await view.findAllByRole('listitem');
    expect(heroes.length).toBeGreaterThan(0);
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
    const heroLink = await view.findByRole('link', {
      name: expectedHeroName,
    });

    user.click(heroLink);

    expect(
      await view.findByRole('heading', { name: expectedHeroName })
    ).toBeInTheDocument();
  });

  it('the sidekicks button is broken', async () => {
    await view.navigate('/', featurePath);
    const sidekicksLink = await view.findByRole('button', {
      name: /sidekicks/i,
    });

    user.click(sidekicksLink);

    expect(
      await view.findByRole('heading', { name: /not found/i })
    ).toBeInTheDocument();
  });

  it('the hero is highlighted when going back from detail', async () => {
    await view.navigate(`/${expectedHero.id}`, detailPath);
    const backButton = await view.findByRole('button', { name: /back/i });

    user.click(backButton);

    const actualHero = await view.findByRole('link', {
      name: expectedHeroName,
    });
    expect(actualHero.closest('.selected')).toBeInTheDocument();
  });
});
