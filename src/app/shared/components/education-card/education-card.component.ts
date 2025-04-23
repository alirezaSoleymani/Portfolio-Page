import { Component, Input } from '@angular/core';
import { BadgePipe } from '../../pipes/BadgePipe/badge.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'education-card',
  imports: [DatePipe, BadgePipe],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss',
})
export class EducationCardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() startDate: Date;
  @Input() endDate: Date;
}
