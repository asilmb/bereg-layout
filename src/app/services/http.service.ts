import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ApiUrl} from '../enums/urls.enum';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  public get(url: string, api: string = environment.api): Observable<any> {
    return this.http.get(api + url);
  }
  public post(url: string, body: object, api: string = environment.api): Observable<any> {
    return this.http.post(api + url, body);
  }
}
