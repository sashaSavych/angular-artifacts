import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWrapperComponent } from './carousel-wrapper.component';

describe('CarouselWrapperComponent', () => {
  let component: CarouselWrapperComponent;
  let fixture: ComponentFixture<CarouselWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
