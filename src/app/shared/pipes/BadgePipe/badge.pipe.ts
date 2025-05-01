import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badge',
  standalone: true,
})
export class BadgePipe implements PipeTransform {
  transform(value: Date | string, context?: string) {
    const className = context || 'primary';
    return `<span class="badge text-bg-${className}">${value}</span>`;
  }
}
