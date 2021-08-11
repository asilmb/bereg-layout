import { Component, OnInit } from '@angular/core';
import {Urls} from '../../../enums/urls.enum';
import {User} from '../../../models/user.model';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-cabinet-header',
  templateUrl: './cabinet-header.component.html',
  styleUrls: ['./cabinet-header.component.scss']
})
export class CabinetHeaderComponent implements OnInit {
  public value!: string;
  public url = Urls;
  public user: User = new User();

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  private getCurrentUser(): void {
    this.authService.getMe()
      .subscribe(user => {
        this.user = user;
      });
  }

}
