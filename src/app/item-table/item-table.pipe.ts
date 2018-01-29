import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform  {
  transform(value: Array<any>, args: any): any {
  let field = args;
  if(value==null) {
    return null;
  }
  console.log(field);
  if (field.startsWith("-")) {
    field = field.substring(1);
    if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
      return [...value].sort((a, b) => b[field].localeCompare(a[field]));
    }
    if (field.indexOf('.') > -1)
    {
      let attribute = field.split('.');
      let attribute1 = attribute[0];
      let attribute2 = attribute[1];
      return [...value].sort((a, b) => b[attribute1][attribute2] - a[attribute1][attribute2]);
    }
    return [...value].sort((a, b) => b[field] - a[field]);
  }
  else {
    if (value.length > 0) {
      if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
        return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
      }

      if (field.indexOf('.') > -1)
      {
        let attribute = field.split('.');
        let attribute1 = attribute[0];
        let attribute2 = attribute[1];
        return [...value].sort((a, b) => a[attribute1][attribute2] - b[attribute1][attribute2]);
      }
      return [...value].sort((a, b) => a[field] - b[field]);
    }
    else {
      return;
    }
  }
}
}
