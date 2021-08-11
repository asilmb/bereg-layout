import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {Router} from '@angular/router';
import {Constants} from '../../enums/const.enum';
import {Urls} from '../../enums/urls.enum';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkAuth();
  }
  private checkAuth(): any {
    const token = this.storageService.getItem(Constants.token);
    if (token) {
      return this.router.navigate([Urls.cabinet]);
    }
    return;
  }

}
