import {Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {CircleProgressBarComponent} from './components/circle-progress-bar/circle-progress-bar.component';
import {LineProgressBarComponent} from './components/line-progress-bar/line-progress-bar.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'nga-circle-progress-bar', component: CircleProgressBarComponent },
  { path: 'nga-line-progress-bar', component: LineProgressBarComponent },
  { path: '**', redirectTo: 'home' }
];
