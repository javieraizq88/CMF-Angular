import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {
  transform(value: any[], sortAsc: boolean): any[] {
    return value.sort((a, b) => {
      if (sortAsc) {
        return a.valor - b.valor;
      } else {
        return b.valor - a.valor;
      }
    });
  }
}
