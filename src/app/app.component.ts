import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { IUser } from './shared/models/user.model';
import { EDUCATION, MENU, USER } from './config';
import { IMenu } from './shared/models/menu.model';
import { FooterComponent } from './shared/components/footer/footer.component';
import { EducationCardComponent } from './shared/components/education-card/education-card.component';
import { IEducation } from './shared/models/education.model';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    EducationCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  user_data: IUser = USER;
  menu_data: IMenu[] = MENU;
  education_data: IEducation[] = EDUCATION;
}
