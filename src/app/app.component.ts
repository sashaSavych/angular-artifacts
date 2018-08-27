import { Component } from '@angular/core';
import {ROUTES} from './app.routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly routes = ROUTES.filter(route => route.path !== '' && route.path !== '**');
}
