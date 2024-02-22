import { Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StopWatchService {
  stopWatchSource: Observable<number> = interval();
}
