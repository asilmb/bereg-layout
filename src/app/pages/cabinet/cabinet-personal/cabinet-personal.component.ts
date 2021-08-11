import { Component, OnInit } from '@angular/core';
import {Urls} from '../../../enums/urls.enum';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-cabinet-personal',
  templateUrl: './cabinet-personal.component.html',
  styleUrls: ['./cabinet-personal.component.scss']
})
export class CabinetPersonalComponent implements OnInit {
  public urls = Urls;
  public user: User = new User();
  constructor(
    private authService: AuthService,
  ) {
    this.authService.getCurrentUser().subscribe(currentUser => {
      console.log(currentUser);
      this.user = currentUser;
    });
  }

  ngOnInit(): void {
    this.authService.getMe().subscribe();
  }
  public logout(): void {
    this.authService.logout();
  }
}
