import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockDisplayComponent, ButtonsRowComponent } from './ui';

@NgModule({
  declarations: [ClockDisplayComponent, ButtonsRowComponent],
  exports: [CommonModule,ClockDisplayComponent,ButtonsRowComponent],
})
export class SharedModule {}
