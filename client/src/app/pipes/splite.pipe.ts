import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splite'
})
export class SplitePipe implements PipeTransform {
  transform(value: string, index?: any, regExp?: string): any {     
    const result = value.split(regExp);
    return (index !=null) ? result[index] : result;
  }
}
