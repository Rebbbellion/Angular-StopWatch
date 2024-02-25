import { Component } from '@angular/core';
import { BehaviorSubject, Connectable } from 'rxjs';
import { StopWatchService } from 'stopWatch/data-access';
import { IStopWatch } from 'stopWatch/utils/interfaces';

@Component({
  selector: 'app-stopWatch',
  templateUrl: './stopWatch.page.html',
  host: {
    class: 'flex grow flex-col justify-center items-center px-[15px]',
  },
})
export class StopWatchPage {
  constructor(private stopWatchService: StopWatchService) {}

  stopWatch: Connectable<IStopWatch> = this.stopWatchService.stopWatchSource;

  stopWatchRunning: BehaviorSubject<boolean> =
    this.stopWatchService.stopWatchRunning;
}
