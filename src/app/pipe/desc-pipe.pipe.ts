import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descPipe'
})
export class DescPipePipe implements PipeTransform {

  transform(desc:any,name:any,website:any): any {
  
    return desc  + ' ' + name +  ' ' +  website;
  
  }

}
