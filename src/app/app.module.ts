import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LendingComponent } from './pages/lending/lending.component';
import { LendingHeaderComponent } from './pages/lending/lending-header/lending-header.component';
import { LendingFooterComponent } from './pages/lending/lending-footer/lending-footer.component';
import { LendingBannerComponent } from './pages/lending/lending-banner/lending-banner.component';
import { LendingIntroComponent } from './pages/lending/lending-intro/lending-intro.component';
import { LendingAboutComponent } from './pages/lending/lending-about/lending-about.component';
import { LendingWinComponent } from './pages/lending/lending-win/lending-win.component';
import { LendingPriceComponent } from './pages/lending/lending-price/lending-price.component';
import { LendingReviewComponent } from './pages/lending/lending-review/lending-review.component';
import { LendingAdaptiveComponent } from './pages/lending/lending-adaptive/lending-adaptive.component';
import { LendingDrawComponent } from './pages/lending/lending-draw/lending-draw.component';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import {CabinetDietComponent} from './pages/cabinet/cabinet-diet/cabinet-diet.component';
import {CabinetScheduleComponent} from './pages/cabinet/cabinet-schedule/cabinet-schedule.component';
import {CabinetInfoComponent} from './pages/cabinet/cabinet-info/cabinet-info.component';
import { CabinetPersonalComponent } from './pages/cabinet/cabinet-personal/cabinet-personal.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './components/authorization/login/login.component';
import { RegistrationComponent } from './components/authorization/registration/registration.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorInterceptor} from './interceptors/error.interceptor';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {ToastrModule} from 'ngx-toastr';
import {toastrConfigs} from './enums/config';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SuccessRegistrationComponent } from './components/success-registration/success-registration.component';
import { SettingPaymentComponent } from './pages/settings/setting-payment/setting-payment.component';
import {MaterialModule} from './material-module';
import { CabinetHeaderComponent } from './pages/cabinet/cabinet-header/cabinet-header.component';
import { CabinetMenuComponent } from './pages/cabinet/cabinet-menu/cabinet-menu.component';
import { CabinetHomeComponent } from './pages/cabinet/cabinet-home/cabinet-home.component';
import { CabinetDashboardComponent } from './pages/cabinet/cabinet-dashboard/cabinet-dashboard.component';
import { CabinetNewsComponent } from './pages/cabinet/cabinet-news/cabinet-news.component';
import { CabinetTournamentComponent } from './pages/cabinet/cabinet-tournament/cabinet-tournament.component';
import { CabinetExercisesComponent } from './pages/cabinet/cabinet-exercises/cabinet-exercises.component';
import { HomeCardDietComponent } from './pages/cabinet/cabinet-home/home-card-diet/home-card-diet.component';
import { HomeCardGoalComponent } from './pages/cabinet/cabinet-home/home-card-goal/home-card-goal.component';
import { HomeCardExercisesComponent } from './pages/cabinet/cabinet-home/home-card-exercises/home-card-exercises.component';
import { ProfilePersonalComponent } from './pages/profile/profile-personal/profile-personal.component';
import { ProfileInformationComponent } from './pages/profile/profile-information/profile-information.component';
import { ProfilePasswordComponent } from './pages/profile/profile-password/profile-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LendingComponent,
    LendingHeaderComponent,
    LendingFooterComponent,
    LendingBannerComponent,
    LendingIntroComponent,
    LendingAboutComponent,
    LendingWinComponent,
    LendingPriceComponent,
    LendingReviewComponent,
    LendingAdaptiveComponent,
    LendingDrawComponent,
    CabinetComponent,
    CabinetDietComponent,
    CabinetInfoComponent,
    CabinetScheduleComponent,
    CabinetPersonalComponent,
    ProfileComponent,
    LoginComponent,
    RegistrationComponent,
    AuthorizationComponent,
    ConfirmationComponent,
    SettingsComponent,
    SuccessRegistrationComponent,
    SettingPaymentComponent,
    CabinetHeaderComponent,
    CabinetMenuComponent,
    CabinetHomeComponent,
    CabinetDashboardComponent,
    CabinetNewsComponent,
    CabinetTournamentComponent,
    CabinetExercisesComponent,
    HomeCardDietComponent,
    HomeCardGoalComponent,
    HomeCardExercisesComponent,
    ProfilePersonalComponent,
    ProfileInformationComponent,
    ProfilePasswordComponent,
  ],
  imports: [
    ToastrModule.forRoot(toastrConfigs),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
