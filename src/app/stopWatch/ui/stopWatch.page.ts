import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
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
export class StopWatchPage implements OnDestroy {
  constructor(private stopWatchService: StopWatchService) {}
  stopWatch: IStopWatch = {
    currentLapTime: 0,
    stopWatchTime: 0,
  };
  lapsArray: IStopWatch[] = [];
  stopWatchStopped: boolean = true;

  @ViewChild('lapList') lapList!: ElementRef<HTMLDivElement>;

  stopWatchSubscription: Subscription | undefined;

  watchStartAndStop() {
    if (this.stopWatchStopped) {
      this.stopWatchSubscription =
        this.stopWatchService.stopWatchSource.subscribe(() => {
          ++this.stopWatch.currentLapTime;
          ++this.stopWatch.stopWatchTime;
        });
    } else {
      this.stopWatchSubscription?.unsubscribe();
    }

    this.stopWatchStopped = !this.stopWatchStopped;
  }

  watchReset() {
    this.stopWatchSubscription?.unsubscribe();
    for (const prop in this.stopWatch) {
      this.stopWatch[prop as keyof IStopWatch] = 0;
    }
    this.lapsArray.length = 0;
  }

  createLap() {
    this.lapsArray.pop();
    this.lapsArray.push({ ...this.stopWatch });
    this.stopWatch.currentLapTime = 0;
    this.lapsArray.push(this.stopWatch);
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

  ngOnDestroy(): void {
    this.stopWatchSubscription?.unsubscribe();
  }
}
