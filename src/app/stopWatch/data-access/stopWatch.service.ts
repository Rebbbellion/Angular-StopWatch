import { Injectable } from '@angular/core';
import { Observable, Subject, interval, map, tap } from 'rxjs';
import { TimeReferences } from 'shared/enums';
import { IClock } from 'shared/interfaces';
import { IStopWatch } from 'stopWatch/utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StopWatchService {
  private stopWatch: IStopWatch = {
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
  private stopWatchStopped: boolean = true;

  watchStateSubject: Subject<boolean> = new Subject();
  stopWatchSource: Observable<IStopWatch> = interval().pipe(
    tap(() => {
      this.clockCounter(this.stopWatch.currentLapTime);
      this.clockCounter(this.stopWatch.stopWatchTime);
    }),
    map(() => this.stopWatch)
  );
  lapsSubject: Subject<IStopWatch | null> = new Subject();

  private clockCounter(clockObj: IClock) {
    ++clockObj.milliseconds;

    if (clockObj.milliseconds === TimeReferences.seconds) {
      clockObj.milliseconds = 0;
      ++clockObj.seconds;
    }
    if (clockObj.seconds === TimeReferences.minutes) {
      clockObj.seconds = 0;
      ++clockObj.minutes;
    }
    if (clockObj.minutes === TimeReferences.hours) {
      clockObj.minutes = 0;
      ++clockObj.hours;
    }
  }

  stopWatchStartStopToggle() {
    this.stopWatchStopped = !this.stopWatchStopped;
    this.watchStateSubject.next(this.stopWatchStopped);
  }

  stopWatchReset() {
    for (const key in this.stopWatch) {
      if (typeof this.stopWatch[key as keyof IStopWatch] === 'object') {
        const clockObj = this.stopWatch[key as keyof IStopWatch];
        for (const prop in clockObj) {
          clockObj[prop as keyof IClock] = 0;
        }
      }
    }
    this.stopWatchStopped = true;
    this.watchStateSubject.next(true);
    this.lapsSubject.next(null);
  }

  createLap() {
    this.lapsSubject.next(JSON.parse(JSON.stringify(this.stopWatch)));
    for (const prop in this.stopWatch.currentLapTime) {
      this.stopWatch.currentLapTime[prop as keyof IClock] = 0;
    }
    this.lapsSubject.next(this.stopWatch);
  }
}
