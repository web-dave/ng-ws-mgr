import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'available',
})
export class AvailablePipe implements PipeTransform {
  transform(number: number): '✔️' | '❌' {
    console.log(number);
    return number === 1 ? '✔️' : '❌';
  }
}
