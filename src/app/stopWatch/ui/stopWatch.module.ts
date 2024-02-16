import { NgModule } from '@angular/core';
import { StopWatchPage } from './stopWatch.page';
import { SharedModule } from 'shared/shared.module';
import {
  ResetButtonModule,
  StartLapButtonModule,
  StartStopButtonModule,
} from 'stopWatch/features';

@NgModule({
  imports: [
    SharedModule,
    StartLapButtonModule,
    ResetButtonModule,
    StartStopButtonModule,
  ],
  declarations: [StopWatchPage],
  exports: [
    StopWatchPage,
    StartStopButtonModule,
    StartLapButtonModule,
    ResetButtonModule,
  ],
})
export class StopWatchModule {}
