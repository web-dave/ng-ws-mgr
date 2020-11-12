import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seats',
})
export class SeatsPipe implements PipeTransform {
  transform(s: number): string {
    const seats = new Array(s);
    seats.fill('👮‍♀️');
    return `${seats.join(' ')} (${s})`;
  }
}
