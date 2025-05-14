import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { EducationCardComponent } from './shared/components/education-card/education-card.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { IUser } from './shared/models/user.model';
import { IMenu } from './shared/models/menu.model';
import { IEducation } from './shared/models/education.model';
import { UserService } from './shared/services/user.service';
import { MenuService } from './shared/services/menu.service';
import { EducationService } from './shared/services/education.service';
// import { Observable, of } from 'rxjs';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    EducationCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private userService: UserService,
    private menuService: MenuService,
    private educationService: EducationService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((userData) => {
      this.user_data = userData;
      console.log('user data is being fetched form the UserService');
      console.log(this.user_data);
    });

    this.menuService.getMenu().subscribe((menuData) => {
      this.menu_data = menuData;
      console.log('menu data is being fetched form the MenuService');
      console.log(this.menu_data);
    });

    this.educationService.getEducation().subscribe({
      next: (educationData) => {
        this.education_data = educationData;
        console.log(
          'education data is being fetched from the EducationService'
        );
        console.log(this.education_data);
      },
      error: (err) => {
        this.errorMessage = err.message;
        console.log('Error: ', err.message);

        const errorToast = Toast.getOrCreateInstance(
          document.getElementById('errorToast')
        );
        errorToast.show();
      },
    });
  }

  user_data: IUser;
  menu_data: IMenu[];
  education_data: IEducation[];

  errorMessage: string = '';
}
