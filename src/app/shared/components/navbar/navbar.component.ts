import { Component, HostListener, Input } from '@angular/core';
import { IUser } from '../../models/user.model';
import { IMenu } from '../../models/menu.model';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() user: IUser;
  @Input() menu: IMenu[];

  active: IMenu;

  onNavbarItemClicked(item: IMenu) {
    this.active = item;
  }

  @HostListener('window:scroll', [])
  onScrollEffect() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';

    if (window.scrollY > 150) {
      navbar.classList.add('bg-dark-primary');
      navbar.classList.add('navbar-sticky');
    } else if (!isExpanded) {
      navbar.classList.remove('bg-dark-primary');
      navbar.classList.remove('navbar-sticky');
    }
  }

  @HostListener('show.bs.collapse', [])
  onExpandMenuEffect() {
    const navbar = document.querySelector('.navbar');

    navbar.classList.add('bg-dark-primary');
    navbar.classList.add('navbar-sticky');
  }

  @HostListener('hide.bs.collapse', [])
  onCollapseMenuEffect() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY < 150) {
      navbar.classList.remove('bg-dark-primary');
      navbar.classList.remove('navbar-sticky');
    }
  }
}
