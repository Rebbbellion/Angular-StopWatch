import { Pipe, PipeTransform } from '@angular/core';
import { TimeReferences } from 'shared/enums';

@Pipe({
  name: 'convertMsToTime',
})
export class ConvertMsToTimePipe implements PipeTransform {
  transform(seconds: number | undefined = 0): string {
    const hours = Math.floor(seconds / TimeReferences.hours);
    let remainingSeconds = seconds % TimeReferences.hours;
    const minutes = Math.floor(remainingSeconds / TimeReferences.minutes);
    remainingSeconds %= TimeReferences.minutes;
    return (
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0') +
      ':' +
      remainingSeconds.toString().padStart(2, '0')
    );
  }
}
