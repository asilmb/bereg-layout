import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {StorageService} from '../../services/storage.service';
import {Constants} from '../../enums/const.enum';
import {Router} from '@angular/router';
import {Urls} from '../../enums/urls.enum';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  public spinner = false;
  public url = Urls;
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkToken();
    this.confirmUser();
  }
  private confirmUser(): void {
    const token = location.search.split('?token=')[1];
    this.authService.confirmUser(token).subscribe( response => {
      this.spinner = false;
    });
  }
  private checkToken(): void {
    const token = this.storageService.getItem(Constants.token);
    if (token) {
      this.router.navigate([Urls.cabinet]);
    }
  }
}
