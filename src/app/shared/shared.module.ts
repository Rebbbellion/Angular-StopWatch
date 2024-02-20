import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockDisplayComponent, ButtonsRowComponent } from './ui';
import { AddZeroPipe } from './pipes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ClockDisplayComponent, ButtonsRowComponent, AddZeroPipe],
  imports: [CommonModule],
  exports: [
    CommonModule,
    ClockDisplayComponent,
    ButtonsRowComponent,
    AddZeroPipe,
    BrowserAnimationsModule,
  ],
})
export class SharedModule {}
