import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routing';

// custom
import { HomeComponent } from './components/home/home.component';
import { CircleProgressBarComponent } from './components/circle-progress-bar/circle-progress-bar.component';
import { LineProgressBarComponent } from './components/line-progress-bar/line-progress-bar.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {CarouselItemDirective} from './components/carousel/carousel-item.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselItemElementDirective} from './components/carousel/carouser-item-element.directive';
import { CarouselWrapperComponent } from './components/carousel-wrapper/carousel-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CircleProgressBarComponent,
    LineProgressBarComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CarouselWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
