import { Component, Input } from '@angular/core';
import { StopWatchService } from 'stopWatch/data-access';

@Component({
  selector: 'app-start-lap-button',
  templateUrl: './start-lap-button.component.html',
})
export class StartLapButtonComponent {
  constructor(private stopWatchService: StopWatchService) {}
  @Input() stopWatchRunning!: boolean | null;
  onNewLapClick() {
    this.stopWatchService.createLap();
  }
}
