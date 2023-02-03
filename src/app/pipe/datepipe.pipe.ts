import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return super.transform(value, "EEEE d MMMM y h:mm a");
  }

}
