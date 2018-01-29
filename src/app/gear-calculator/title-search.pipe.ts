import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleSearch',
  pure: false
})
export class TitleSearchPipe implements PipeTransform {
  transform(items: any[], filter: String): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => item.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
