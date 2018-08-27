import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nga-line-progress-bar',
  templateUrl: './line-progress-bar.component.html',
  styleUrls: ['./line-progress-bar.component.scss']
})
export class LineProgressBarComponent implements OnInit {
  @Input() label = 'JavaScript';
  @Input() maxValue = 38;
  value = 0;

  constructor() { }

  ngOnInit() {
    const interval = setInterval(() => {
      this.value += Math.floor(Math.random() * 10) + 1;
      if (this.value >= this.maxValue) {
        this.value = this.maxValue;
        clearInterval(interval);
      }
    }, 100);
  }

}
