import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-personal',
  templateUrl: './profile-personal.component.html',
  styleUrls: ['./profile-personal.component.scss']
})
export class ProfilePersonalComponent implements OnInit {
  public personalGroup!: FormGroup;
  public get controls(): any { return this.personalGroup.controls; }
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initPersonalForm();
  }

  private initPersonalForm(): void {
    this.personalGroup = this.formBuilder.group({
      email: new FormControl('', []),
      firstName: new FormControl('', []),
      lastName: new FormControl('', [])
    });
  }

}
