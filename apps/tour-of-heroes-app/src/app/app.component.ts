import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoggingFeatureMessagesModule } from '@tour-of-heroes/logging/feature-messages';
import { slideInAnimation } from '@tour-of-heroes/shared/ui-navigation';

@Component({
  animations: [slideInAnimation],
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  getAnimationData(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule, LoggingFeatureMessagesModule],
})
export class AppScam {}
