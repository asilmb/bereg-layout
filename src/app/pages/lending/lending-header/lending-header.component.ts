import { Component, OnInit } from '@angular/core';
import {Urls} from '../../../enums/urls.enum';

@Component({
  selector: 'app-lending-header',
  templateUrl: './lending-header.component.html',
  styleUrls: ['./lending-header.component.scss']
})
export class LendingHeaderComponent implements OnInit {
  public url = Urls;

  constructor() { }

  ngOnInit(): void {
  }

}
