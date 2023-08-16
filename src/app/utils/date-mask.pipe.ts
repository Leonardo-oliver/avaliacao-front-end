import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateMask'
})
export class DateMaskPipe implements PipeTransform {

  transform(value: string, format: string = 'MM/DD/YYYY'): string {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return value; // Retorna o valor original se não for uma data válida
    }

    const day: any = date.getDate().toString().padStart(2, '0');
    const month: any = (date.getMonth() + 1).toString().padStart(2, '0');
    const year: any = date.getFullYear();

    const formattedDate = format
      .replace('DD', day)
      .replace('MM', month)
      .replace('YYYY', year);

    return formattedDate;
  }
}
