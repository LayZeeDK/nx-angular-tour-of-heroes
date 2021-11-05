import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { render, RenderResult } from '@testing-library/angular';
import user from '@testing-library/user-event';
import { InMemoryDataService } from '@tour-of-heroes/heroes/data-access';
import { ComposeMessageModule } from '@tour-of-heroes/shared/ui-dialogs';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { appRoutes } from './app-routing.module';
import { AppComponent, AppScam } from './app.component';

describe('Angular Testing Library', () => {
  beforeEach(async () => {
    view = await render(AppComponent, {
      imports: [
        AppScam,
        NoopAnimationsModule,
        ComposeMessageModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          dataEncapsulation: false,
        }),
      ],
      routes: appRoutes,
    });
  });

  let view: RenderResult<AppComponent, AppComponent>;

  it('navigates to "Heroes" initially', async () => {
    await view.navigate('/');

    expect(
      await view.findByRole('heading', { name: /heroes/i })
    ).toBeInTheDocument();
  });

  it('navigates to "Dashboard" on click', async () => {
    user.click(await view.findByRole('link', { name: /dashboard/i }));

    expect(
      await view.findByRole('heading', { name: /top heroes/i })
    ).toBeInTheDocument();
  });

  it('navigates to "Crisis Center" on click', async () => {
    user.click(await view.findByRole('link', { name: /crisis center/i }));

    expect(
      await view.findByRole('heading', {
        name: /welcome to the crisis center/i,
      })
    ).toBeInTheDocument();
  });

  it('opens "Contact" on click', async () => {
    user.click(await view.findByRole('link', { name: /contact/i }));

    expect(
      await view.findByRole('heading', {
        name: /contact crisis center/i,
      })
    ).toBeInTheDocument();
  });

  it('navigates to "Admin" when logging in', async () => {
    user.click(await view.findByRole('link', { name: /login/i }));
    user.click(await view.findByRole('button', { name: /login/i }));

    expect(
      await view.findByRole(
        'heading',
        {
          name: /dashboard/i,
        },
        {
          timeout: 2000,
        }
      )
    ).toBeInTheDocument();
  });

  it('navigates to "Login" when clicking "Admin" without logging in', async () => {
    user.click(await view.findByRole('link', { name: /admin/i }));

    expect(
      await view.findByRole('heading', {
        name: /login/i,
      })
    ).toBeInTheDocument();
  });
});
