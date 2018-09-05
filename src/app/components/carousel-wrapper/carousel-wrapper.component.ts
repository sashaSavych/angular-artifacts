import { Component } from '@angular/core';

@Component({
  selector: 'nga-carousel-wrapper',
  templateUrl: './carousel-wrapper.component.html',
  styleUrls: ['./carousel-wrapper.component.scss']
})
export class CarouselWrapperComponent {
  items = [
    { title: '1' },
    { title: '2' },
    { title: '3' },
    { title: '4' },
    { title: '5' }
  ];
}
