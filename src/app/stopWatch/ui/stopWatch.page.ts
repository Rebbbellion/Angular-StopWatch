import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { StopWatchService } from 'stopWatch/data-access';
import { IStopWatch } from 'stopWatch/utils/interfaces';

@Component({
  selector: 'app-stopWatch',
  templateUrl: './stopWatch.page.html',
  host: {
    class: 'flex grow flex-col justify-center items-center px-[15px]',
  },
})
export class StopWatchPage implements OnInit {
  constructor(private stopWatchService: StopWatchService) {}

  ngOnInit(): void {
    this.stopWatchStateSubscription =
      this.stopWatchService.watchStateSubject.subscribe((value) => {
        this.stopWatchStopped = value;
      });

    this.lapSubscription = this.stopWatchService.lapsSubject.subscribe({
      next: (value) => {
        if (value) {
          this.lapsArray.push(value);
        } else {
          this.lapsArray.length = 0;
        }
      },
    });
  }

  stopWatch: IStopWatch = {
    currentLapTime: {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    },
    stopWatchTime: {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    },
  };
  lapsArray: IStopWatch[] = [];

  stopWatchStopped: boolean = true;

  stopWatchSubscription: Subscription | undefined;
  lapSubscription: Subscription | undefined;
  stopWatchStateSubscription: Subscription | undefined;

  @ViewChild('lapList') lapList!: ElementRef<HTMLDivElement>;

  watchStartAndStop() {
    if (this.stopWatchStopped) {
      this.stopWatchSubscription =
        this.stopWatchService.stopWatchSource.subscribe((value) => {
          this.stopWatch = value;
        });
    } else {
      this.stopWatchSubscription?.unsubscribe();
    }
    this.stopWatchService.stopWatchStartStopToggle();
  }

  watchReset() {
    this.stopWatchSubscription?.unsubscribe();
    this.stopWatchService.stopWatchReset();
  }

  createLap() {
    this.lapsArray.pop();
    this.stopWatchService.createLap();
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.lapList.nativeElement.scroll({
        behavior: 'smooth',
        top: this.lapList.nativeElement.scrollHeight,
      });
    }, 0);
  }
}
