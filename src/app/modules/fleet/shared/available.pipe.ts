import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'available',
})
export class AvailablePipe implements PipeTransform {
  transform(n: number): '✔️' | '❌' {
    console.log(n);
    return n === 1 ? '✔️' : '❌';
  }
}
