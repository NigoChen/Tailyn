import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splite'
})
export class SplitePipe implements PipeTransform {
  transform(value: string, index: number): string {        
    const result = value.split(',');
    return result[index];
  }
}
