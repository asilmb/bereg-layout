import {User} from '../app/models/user.model';

export interface LoginUserInterface {
  token: string;
  user: User;
}
