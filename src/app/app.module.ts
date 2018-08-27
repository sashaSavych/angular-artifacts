import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routing';

// custom
import { HomeComponent } from './components/home/home.component';
import { CircleProgressBarComponent } from './components/circle-progress-bar/circle-progress-bar.component';
import { LineProgressBarComponent } from './components/line-progress-bar/line-progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CircleProgressBarComponent,
    LineProgressBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
