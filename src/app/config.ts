import { IEducation } from './shared/models/education.model';
import { IMenu } from './shared/models/menu.model';
import { IUser } from './shared/models/user.model';

export const USER: IUser = {
  name: 'Alireza',
  position: 'Web Developer',
  picture_url: 'images/alireza-3.jpg',
};

export const MENU: IMenu[] = [
  { title: 'Home', url: '#home' },
  { title: 'Education', url: '#education' },
  { title: 'About Me', url: '#about' },
  { title: 'Portfolio', url: '#portfolio' },
  { title: 'Contact', url: '#contact' },
];

export const EDUCATION: IEducation[] = [
  {
    title: 'Elm-o-Farhang Middle School',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus architecto libero reprehenderit quibusdam!',
    image: '/images/school-image.svg',
    startDate: new Date(2017, 9, 1),
    endDate: new Date(2019, 6, 30),
  },
  {
    title: 'Shahriari High School',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus architecto libero reprehenderit quibusdam!',
    image: '/images/school-image.svg',
    startDate: new Date(2020, 9, 1),
    endDate: new Date(2023, 6, 30),
  },
  {
    title: 'University of Isfahan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus architecto libero reprehenderit quibusdam!',
    image: '/images/school-image.svg',
    startDate: new Date(2023, 9, 1),
    endDate: new Date(),
  },
];
