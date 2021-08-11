import {Urls} from '../enums/urls.enum';

export class Menu {
  constructor(
    public url: Urls|string,
    public name: string,
    public icon: string,
    public button: boolean = false,
  ) {}
}

export const MENU = [
  new Menu('/cabinet', 'Home', 'home'),
  new Menu(Urls.dashboard, 'Dashboard', 'dashboard'),
  new Menu(Urls.tournament, 'Tournament', 'emoji_events'),
  new Menu(Urls.diet, 'Diet', 'dining'),
  new Menu(Urls.exercises, 'Exercises', 'fitness_center'),
  new Menu(Urls.news, 'News', 'emoji_events'),
  new Menu(Urls.profile, 'Account', 'account_circle'),
  new Menu(Urls.settings, 'Settings', 'settings'),
];
