import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {mustMatch} from '../../../validators/mustMuch';
import {AuthService} from '../../../services/auth.service';
import {RegUser} from '../../../models/user.model';
import {Urls} from '../../../enums/urls.enum';
import {NotifyMethod, ToastService} from '../../../services/toast.service';
import {Notification} from '../../../enums/notification.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public regGroup!: FormGroup;
  public isHide = true;
  public get controls() { return this.regGroup.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initRegForm();
  }
  public registration(): void {
    this.authService.registration(new RegUser(
      this.controls.email.value,
      this.controls.password.value,
      location.origin + '/' + Urls.confirmation
      ))
      .subscribe(response => {
        this.toastService.notify(Notification.successRegistration, NotifyMethod.Success, Notification.regCheckEmail);
        this.router.navigate([Urls.successRegistration]);
      });
  }

  private initRegForm(): void {
    this.regGroup = this.formBuilder.group({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      repeat: new FormControl('', [
        Validators.required
      ]),
      terms: new FormControl(false, [
        Validators.requiredTrue
      ])
    }, {
      validators: mustMatch('password', 'repeat')
    });
  }
}
