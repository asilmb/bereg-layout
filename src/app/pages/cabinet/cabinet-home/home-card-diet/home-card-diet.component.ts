import { Component, OnInit } from '@angular/core';
import {Diet, DIET_MENU} from '../../../../models/diet.model';
import {Urls} from '../../../../enums/urls.enum';

@Component({
  selector: 'app-home-card-diet',
  templateUrl: './home-card-diet.component.html',
  styleUrls: ['./home-card-diet.component.scss']
})
export class HomeCardDietComponent implements OnInit {
  public menuCards: Diet[] = DIET_MENU;
  public urls = Urls;

  constructor() { }

  ngOnInit(): void {
  }

}
