import { Component, OnInit } from '@angular/core';
import {Urls} from '../../../enums/urls.enum';
import {Menu, MENU} from '../../../models/menu.model';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-cabinet-menu',
  templateUrl: './cabinet-menu.component.html',
  styleUrls: ['./cabinet-menu.component.scss']
})
export class CabinetMenuComponent implements OnInit {
  public Url = Urls;
  public menuList: Menu[] = MENU;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  public logout(): void {
    this.authService.logout();
  }
}
