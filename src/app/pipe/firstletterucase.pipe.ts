import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstletterucase',
})
export class FirstletterucasePipe implements PipeTransform {

  transform(value: string): string | null {
    if (!value) {
      return null;
    }
    
    return value[0].toUpperCase() + value.substr(1).toLowerCase();
  }

}
