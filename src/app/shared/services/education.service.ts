import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEducation } from '../models/education.model';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor(private http: HttpClient) {}

  getEducation() {
    return this.http.get<IEducation[]>('/data/education.json');
  }
}
