import { NgModule } from '@angular/core';
import { ResetButtonComponent } from './reset-button.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [ResetButtonComponent],
  exports: [ResetButtonComponent],
})
export class ResetButtonModule {}
