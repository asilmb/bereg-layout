import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpService} from './http.service';
import 'rxjs/add/operator/map';
import {ApiUrl, Urls} from '../enums/urls.enum';
import {LoginUser, RegUser, User} from '../models/user.model';
import {LoginUserInterface} from '../../interfaces/user.interface';
import {StorageService} from './storage.service';
import {Constants} from '../enums/const.enum';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: Subject<User> = new Subject<User>();
  constructor(
    public httpService: HttpService,
    public storageService: StorageService,
    public router: Router,
  ) { }

  public loginUser(login: LoginUser): Observable<User> {
    return this.httpService.post(ApiUrl.login, login).map((response: LoginUserInterface) => {
      const user = this.convertDataToUser(response.user);
      this.setCurrentUser(user);
      this.storageService.setItem(Constants.token, response.token);
      return user;
    });
  }
  public logout(): void {
    this.storageService.cleanStorage();
    this.router.navigate(['']);
  }
  public registration(newUser: RegUser): Observable<any> {
   return this.httpService.post(ApiUrl.registration, newUser)
     .map(response => {
       return;
     });
  }
  public confirmUser(token: string): Observable<User> {
    return this.httpService.get(ApiUrl.confirm + token).map(response => {
      const currentUser = this.convertDataToUser(response.user);
      this.setCurrentUser(currentUser);
      this.storageService.setItem(Constants.token, response.token);
      return currentUser;
    });
  }
  public getMe(): Observable<User> {
    return this.httpService.get(ApiUrl.getCurrent).map(request => {
      const user = this.convertDataToUser(request);
      this.setCurrentUser(user);
      return user;
    });
  }
  public getCurrentUser(): Observable<User> {
    return this.currentUser.asObservable();
  }
  private setCurrentUser(user: User): void {
    this.currentUser.next(user);
  }
  private convertDataToUser(data: any): User {
    return new User(
      data.id,
      data.uuid,
      data.email,
      null,
      data.firstName,
      data.lastName,
      data.height,
      data.weight,
      data.birthday,
      data.gender,
      data.isConvirmed,
      data.isActive,
      data.season,
      data.update,
      data.create
    );
  }
}
