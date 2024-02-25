import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Connectable,
  Subject,
  connectable,
  interval,
  map,
  take,
  takeWhile,
  tap,
} from 'rxjs';
import { IStopWatch } from 'stopWatch/utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StopWatchService {
  private stopWatch: IStopWatch = {
    currentLapTime: 0,
    stopWatchTime: 0,
  };

  stopWatchSource: Connectable<IStopWatch> = connectable(
    interval(1000).pipe(
      takeWhile(() => this.stopWatchRunning.value),
      tap(() => {
        ++this.stopWatch.currentLapTime;
        ++this.stopWatch.stopWatchTime;
      }),
      map(() => this.stopWatch)
    ),
    { connector: () => new BehaviorSubject(this.stopWatch) }
  );
  stopWatchRunning: BehaviorSubject<boolean> = new BehaviorSubject(false);

  lapSubject: Subject<[IStopWatch, string]> = new Subject<
    [IStopWatch, string]
  >();

  watchStartAndStop() {
    this.stopWatchRunning.next(!this.stopWatchRunning.value);
    if (this.stopWatchRunning.value) {
      this.stopWatchSource.connect();
    }
  }

  watchReset() {
    this.stopWatch.currentLapTime = 0;
    this.stopWatch.stopWatchTime = 0;
		this.lapSubject.next([this.stopWatch,'Clear'])
    this.stopWatchRunning.next(false);
  }

  createLap() {
    this.lapSubject.next([{ ...this.stopWatch }, 'Save']);
    this.lapSubject.next([this.stopWatch, 'Start']);
  }
}
