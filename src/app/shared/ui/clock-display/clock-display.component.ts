import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock-display',
  templateUrl: './clock-display.component.html',
})
export class ClockDisplayComponent {
  @Input() clockDisplay: number = 0;
}
