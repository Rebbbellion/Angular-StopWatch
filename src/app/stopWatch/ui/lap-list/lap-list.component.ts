import { Component, Input } from '@angular/core';
import { IStopWatch } from 'stopWatch/utils/interfaces';

import {
	animate,
	style,
	transition,
	trigger
} from '@angular/animations';

@Component({
  selector: 'app-lap-list',
  templateUrl: './lap-list.component.html',
  animations: [
    trigger('showHideLapList', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('0.3s ease', style({ opacity: 0 }))]),
    ]),
  ],
})
export class LapListComponent {
  @Input() lapsArray: IStopWatch[] = [];
}
