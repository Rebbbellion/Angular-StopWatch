import { NgModule } from '@angular/core';
import { StartLapButtonComponent } from './start-lap-button.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [StartLapButtonComponent],
	exports: [StartLapButtonComponent]
})
export class StartLapButtonModule {}
