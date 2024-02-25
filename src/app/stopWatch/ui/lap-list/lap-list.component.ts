import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IStopWatch } from 'stopWatch/utils/interfaces';

import { animate, style, transition, trigger } from '@angular/animations';
import { StopWatchService } from 'stopWatch/data-access';
import { Subject, takeUntil } from 'rxjs';

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
export class LapListComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>();
  constructor(private stopWatchService: StopWatchService) {}
  ngOnInit(): void {
    this.stopWatchService.lapSubject
      .pipe(takeUntil(this.destroy))
      .subscribe(([value, operationType]) => {
        if (operationType === 'Save') {
          this.lapsArray.pop();
          this.lapsArray.push({ ...value });
        } else if (operationType === 'Start') {
          value.currentLapTime = 0;
          this.lapsArray.push(value);
          this.scrollToBottom();
        } else {
          this.lapsArray.length = 0;
        }
      });
  }
  @ViewChild('lapTable') lapTable!: ElementRef<HTMLTableElement>;
  lapsArray: IStopWatch[] = [];
  scrollToBottom() {
    setTimeout(() => {
      this.lapTable.nativeElement.scroll({
        behavior: 'smooth',
        top: this.lapTable.nativeElement.scrollHeight,
      });
    });
  }
  ngOnDestroy(): void {
    this.destroy.next();
  }
}
