import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {ApiUrl, Urls} from '../enums/urls.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpService: HttpService
  ) { }

  public updateUser(updateInfo: object): any {
    return this.httpService.post(ApiUrl.update, updateInfo)
      .map(() => {
        return;
      });
  }
}
