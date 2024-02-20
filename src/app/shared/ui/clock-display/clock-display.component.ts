import { Component, Input } from '@angular/core';
import { IClock } from 'shared/interfaces';

@Component({
  selector: 'app-clock-display',
  templateUrl: './clock-display.component.html',
})
export class ClockDisplayComponent {
  @Input() clockDisplay: IClock = {
    hours: 0,
    minutes: 0,
    milliseconds: 0,
    seconds: 0,
  };
}
