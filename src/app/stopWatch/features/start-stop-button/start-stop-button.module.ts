import { NgModule } from '@angular/core';
import { StartStopButtonComponent } from './start-stop-button.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [StartStopButtonComponent],
})
export class StartStopButtonModule {}
