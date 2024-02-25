import { Pipe, PipeTransform, Renderer2 } from '@angular/core';
import { TimeReferences } from 'shared/enums';

@Pipe({
  name: 'convertMsToTime',
})
export class ConvertMsToTimePipe implements PipeTransform {
  constructor(private renderer: Renderer2) {}
  transform(milliseconds: number, format: string = 'hh:mm:ss'): string {
    const hours = Math.floor(milliseconds / TimeReferences.hours);
    let remainingMilliseconds = milliseconds % TimeReferences.hours;
    const minutes = Math.floor(remainingMilliseconds / TimeReferences.minutes);
    remainingMilliseconds %= TimeReferences.minutes;
    const seconds = Math.floor(milliseconds / TimeReferences.seconds);
    remainingMilliseconds %= TimeReferences.seconds;

    let timestamp: string[] = [];

    format.split(':').forEach((format) => {
      if (format === 'hh') {
        timestamp.push(hours.toString().padStart(2, '0'));
      }
      if (format === 'mm') {
        timestamp.push(minutes.toString().padStart(2, '0'));
      }
      if (format === 'ss') {
        timestamp.push(seconds.toString().padStart(2, '0'));
      }
      if (format === 'ms') {
        timestamp.push(remainingMilliseconds.toString().padStart(2, '0'));
      }
    });

    return timestamp.join(':');
  }
}
