import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopWatch',
	templateUrl: './stopWatch.page.html',
	host: {
		class: 'flex justify-center items-center grow flex-col'
	}
})
export class StopWatchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
