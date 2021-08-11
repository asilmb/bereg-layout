import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {LoginUser} from '../../../models/user.model';
import {Router} from '@angular/router';
import {Urls} from '../../../enums/urls.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginGroup!: FormGroup;
  public get controls(): any { return this.loginGroup.controls; }
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router,
) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  public login(): void {
    this.authService.loginUser(new LoginUser(
      this.controls.email.value,
      this.controls.password.value
    )).subscribe(response => {
      this.router.navigate([Urls.cabinet]);
    });
  }

  private initLoginForm(): void {
    this.loginGroup = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }
}
