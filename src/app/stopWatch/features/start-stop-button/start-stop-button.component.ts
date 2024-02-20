import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-start-stop-button',
  templateUrl: './start-stop-button.component.html',
})
export class StartStopButtonComponent {
  @Input() stopWatchStopped: boolean = true;

  @Output() startAndStopClick: EventEmitter<void> = new EventEmitter();

  onStartAndStopClick() {
    this.startAndStopClick.emit();
  }
}
