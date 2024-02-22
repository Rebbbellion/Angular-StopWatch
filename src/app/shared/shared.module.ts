import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockDisplayComponent, ButtonsRowComponent } from './ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConvertMsToTimePipe } from './pipes';

@NgModule({
  declarations: [
    ClockDisplayComponent,
    ButtonsRowComponent,
    ConvertMsToTimePipe,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    ClockDisplayComponent,
    ButtonsRowComponent,
    BrowserAnimationsModule,
    ConvertMsToTimePipe,
  ],
})
export class SharedModule {}
