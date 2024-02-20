import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-start-lap-button',
  templateUrl: './start-lap-button.component.html',
})
export class StartLapButtonComponent {
  @Input() stopWatchStopped: boolean = true;
  @Output() startNewLap: EventEmitter<void> = new EventEmitter();

  onNewLapClick() {
    this.startNewLap.emit();
  }
}
