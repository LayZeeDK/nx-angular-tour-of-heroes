import { SpectacularAppComponent, SpectacularFeatureTestingModule } from '@ngworker/spectacular';
import { render, RenderResult } from '@testing-library/angular';
import user from '@testing-library/user-event';
import { HEROES } from '@tour-of-heroes/heroes/data-access';

import { HeroesFeatureShellModule } from './heroes-feature-shell.module';
import { heroesDefaultRoutePath, heroesRoutes } from './heroes-routes';

describe('Heroes feature', () => {
  beforeEach(async () => {
    view = await render(SpectacularAppComponent, {
      imports: [
        SpectacularFeatureTestingModule.withFeature({
          featureModule: HeroesFeatureShellModule,
          featurePath: heroesDefaultRoutePath,
        }),
      ],
      routes: [...heroesRoutes],
    });
  });

  const [expectedHero] = HEROES;
  const expectedHeroName = new RegExp(expectedHero.name, 'i');
  const featurePath = heroesDefaultRoutePath;
  let view: RenderResult<SpectacularAppComponent, SpectacularAppComponent>;

  it('changes a hero name', async () => {
    await view.navigate('/', featurePath);
    user.click(
      await view.findByRole('link', {
        name: expectedHeroName,
      })
    );

    const heroHeading = await view.findByRole('heading', {
      name: expectedHeroName,
    });
    const nameControl = await view.findByRole('textbox', { name: /name/i });
    const newName = 'New Name';

    user.clear(nameControl);
    user.type(nameControl, newName);

    expect(heroHeading).toHaveTextContent(newName);

    user.click(await view.findByRole('button', { name: /back/i }));

    expect(
      await view.findByRole('link', {
        name: new RegExp(newName, 'i'),
      })
    ).toBeInTheDocument();
  });
});
