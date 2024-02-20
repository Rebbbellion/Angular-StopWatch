import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
})
export class ResetButtonComponent {
  @Input() stopWatchStopped: boolean = true;

  @Output() resetClick: EventEmitter<void> = new EventEmitter();

  onResetClick() {
    this.resetClick.emit();
  }
}
