import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMenu } from '../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get<IMenu[]>('/data/menu.json');
  }
}
