import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {UpdatePersonal, User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
enum side {
  back = 'backImg',
  front = 'frontImg',
  side = 'sideImg',
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public personalForm!: FormGroup;
  public imagesForm!: FormGroup;
  public currentUser = new User();
  public side = side;
  public frontImg!: string;
  public sideImg!: string;
  public backImg!: string;
  public get controls(): any { return this.personalForm.controls; }
  public get imgControls(): any { return this.imagesForm.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.authService.getCurrentUser()
      .subscribe((user: User) => {
        this.currentUser = user;
      });
  }


  ngOnInit(): void {
    this.initForms();
    this.getUser();
  }
  public sendPersonalInfo(): void {
    console.log(new UpdatePersonal(
      this.controls.gender.value,
      this.controls.firstName.value,
      this.controls.lastName.value,
      this.controls.height.value,
      this.controls.weight.value,
      this.controls.birthday.value
    ));
    this.userService.updateUser(new UpdatePersonal(
      this.controls.gender.value,
      this.controls.firstName.value,
      this.controls.lastName.value,
      this.controls.height.value,
      this.controls.weight.value,
      this.controls.birthday.value
    )).subscribe(() => {

      });
  }

  public myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }
  public onSelectFile(event: any, photo: side): void {
    const reader = new FileReader();
    if (event.target.files && event.target.files[0]) {
        const [frontImg] = event.target.files;
        const [backImg] = event.target.files;
        const [sideImg] = event.target.files;
        if (this.side.front === photo) {
          reader.readAsDataURL(frontImg);
          reader.onload = () => {
            this.frontImg = reader.result as string;
            this.imagesForm.patchValue({
              fileSource: reader.result
            });
          };
        } else if (this.side.back === photo) {
          reader.readAsDataURL(backImg);
          reader.onload = () => {
            this.backImg = reader.result as string;
            this.imagesForm.patchValue({
              fileSource: reader.result
            });
          };
        } else if (this.side.side === photo) {
          reader.readAsDataURL(sideImg);
          reader.onload = () => {
            this.sideImg = reader.result as string;
            this.imagesForm.patchValue({
              fileSource: reader.result
            });
          };
        }
    }
  }
  private setUserData(): void {
    this.personalForm.controls.firstName.setValue(this.currentUser.firstName);
    this.personalForm.controls.gender.setValue(this.currentUser.gender);
    this.personalForm.controls.lastName.setValue(this.currentUser.lastName);
    this.personalForm.controls.height.setValue(this.currentUser.height);
    this.personalForm.controls.weight.setValue(this.currentUser.weight);
    this.personalForm.controls.birthday.setValue(this.currentUser.birthday);
  }
  private getUser(): void {
     this.authService.getMe()
      .subscribe(user => {
        this.currentUser = user;
        this.setUserData();
      });
  }

  private initForms(): void {
    this.personalForm = this.formBuilder.group({
      gender: new FormControl('', [
        Validators.required,
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(60)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(60)
      ]),
      height: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(3)
        ]),
      weight: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(3)
      ]),
      birthday: new FormControl('', [
        Validators.required,
      ])
    });
    this.imagesForm = this.formBuilder.group({
      frontImg: new FormControl('', [
        Validators.required
      ]),
      backImg: new FormControl('', [
        Validators.required
      ]),
      sideImg: new FormControl('', [
        Validators.required
      ]),
      fileSource: new FormControl('', [Validators.required])
    });
  }
}
