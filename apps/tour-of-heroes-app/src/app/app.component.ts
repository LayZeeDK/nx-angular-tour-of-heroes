import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
