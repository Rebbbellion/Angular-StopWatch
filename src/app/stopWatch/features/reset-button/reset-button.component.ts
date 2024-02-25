import { Component } from '@angular/core';
import { StopWatchService } from 'stopWatch/data-access';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
})
export class ResetButtonComponent {
	constructor(private stopWatchService: StopWatchService){}
	onResetClick(){
		this.stopWatchService.watchReset()
	}
}
