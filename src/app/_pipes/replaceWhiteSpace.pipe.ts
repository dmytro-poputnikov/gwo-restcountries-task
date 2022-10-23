import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceWhiteSpace',
})
export class ReplaceWhiteSpacePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value === undefined) return 'undefined';
    return value.replace(/, /g, '_').replace(/\s/g, '-');
  }
}
