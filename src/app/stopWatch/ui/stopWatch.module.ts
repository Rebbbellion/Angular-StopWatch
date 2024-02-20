import { NgModule } from '@angular/core';
import { StopWatchPage } from './stopWatch.page';
import { SharedModule } from 'shared/shared.module';
import {
  ResetButtonModule,
  StartLapButtonModule,
  StartStopButtonModule,
} from 'stopWatch/features';
import { LapListComponent } from './lap-list';

@NgModule({
  imports: [
    SharedModule,
    StartLapButtonModule,
    ResetButtonModule,
    StartStopButtonModule,
  ],
  declarations: [StopWatchPage,LapListComponent],
  exports: [
    StopWatchPage,
		LapListComponent,
    StartStopButtonModule,
    StartLapButtonModule,
    ResetButtonModule,
  ],
})
export class StopWatchModule {}
