import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortname'
})
export class ShortnamePipe implements PipeTransform {

  transform(fullName: string): any {
    return fullName
      .split(" ")
      .map(n => n[0])
      .join("");
  }

}
