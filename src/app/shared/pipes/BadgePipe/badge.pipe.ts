import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badge',
  standalone: true,
})
export class BadgePipe implements PipeTransform {
  transform(value: Date | string) {
    return `<span class="badge text-bg-secondary">${value}</span>`;
  }
}
