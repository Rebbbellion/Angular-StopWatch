import { Component, Input } from '@angular/core';
import { StopWatchService } from 'stopWatch/data-access';

@Component({
  selector: 'app-start-stop-button',
  templateUrl: './start-stop-button.component.html',
})
export class StartStopButtonComponent {
  constructor(private stopWatchService: StopWatchService){};

  @Input() stopWatchRunning!: boolean | null;

  onStartAndStopClick() {
    this.stopWatchService.watchStartAndStop();
  }
}
