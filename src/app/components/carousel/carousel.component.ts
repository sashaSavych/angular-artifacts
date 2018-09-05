import {
  AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Directive, ElementRef, Input, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import {CarouselItemDirective} from './carousel-item.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import {CarouselItemElementDirective} from './carouser-item-element.directive';

@Component({
  selector: 'nga-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElementDirective, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;

  @ViewChild('carousel') private carousel: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  private player: AnimationPlayer;
  itemWidth = 0;
  private currentSlide = 0;


  constructor(private builder: AnimationBuilder,
              private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    this.cd.detectChanges();
  }

  private buildAnimation( offset ) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  next() {
    if (this.currentSlide + 1 === this.items.length) {
      this.currentSlide = 0;
    } else {
      this.currentSlide = (this.currentSlide + 1) % this.items.length;
    }
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  prev() {
    if (this.currentSlide === 0 ) {
      this.currentSlide = this.items.length - 1;
    } else {
      this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    }

    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

}
