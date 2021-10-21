import { SpectacularAppComponent } from '@ngworker/spectacular';
import { render, RenderResult } from '@testing-library/angular';
import user from '@testing-library/user-event';
import { HEROES } from '@tour-of-heroes/heroes/data-access';
import { heroesRoutes } from '@tour-of-heroes/heroes/feature-shell';

describe('Heroes detail feature', () => {
  beforeEach(async () => {
    view = await render(SpectacularAppComponent, {
      imports: [
        // SpectacularFeatureTestingModule.withRoutes({
        //   routes: [
        //     ...heroesRoutes,
        //   ],
        // }),
      ],
      routes: [...heroesRoutes],
    });
    const inject = view.fixture.debugElement.injector.get.bind(
      view.fixture.debugElement.injector
    );
  });

  const featurePath = 'superhero';
  const [expectedHero] = HEROES;
  const expectedHeroName = new RegExp(expectedHero.name, 'i');
  let view: RenderResult<SpectacularAppComponent, SpectacularAppComponent>;

  it(`displays the hero's name`, async () => {
    await view.navigate(`/${expectedHero.id}`, featurePath);

    expect(
      await view.findByRole('heading', { name: expectedHeroName })
    ).toBeInTheDocument();
  });

  it('changes a hero name', async () => {
    await view.navigate(`/${expectedHero.id}`, featurePath);
    const heroHeading = await view.findByRole('heading', {
      name: expectedHeroName,
    });
    const nameBox = await view.findByRole('textbox', { name: /name/i });
    const newName = 'New Name';

    user.clear(nameBox);
    user.type(nameBox, newName);

    expect(heroHeading).toHaveTextContent(newName);

    user.click(await view.findByRole('button', { name: /back/i }));

    expect(
      await view.findByRole('link', {
        name: new RegExp(newName, 'i'),
      })
    ).toBeInTheDocument();
  });
});
