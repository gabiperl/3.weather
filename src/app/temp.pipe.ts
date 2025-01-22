import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: number, numDecimals: number = 0): string {
    return value.toFixed(numDecimals) + " °C";
  }

  //Recibe de entrada una temperatura con decimales y la devuelve sin decimales.

}
