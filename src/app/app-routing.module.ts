import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LendingComponent} from './pages/lending/lending.component';
import {Urls} from './enums/urls.enum';
import {CabinetComponent} from './pages/cabinet/cabinet.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {AuthorizationComponent} from './components/authorization/authorization.component';
import {ConfirmationComponent} from './components/confirmation/confirmation.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {SuccessRegistrationComponent} from './components/success-registration/success-registration.component';
import {CabinetHomeComponent} from './pages/cabinet/cabinet-home/cabinet-home.component';
import {CabinetDashboardComponent} from './pages/cabinet/cabinet-dashboard/cabinet-dashboard.component';
import {CabinetNewsComponent} from './pages/cabinet/cabinet-news/cabinet-news.component';
import {CabinetTournamentComponent} from './pages/cabinet/cabinet-tournament/cabinet-tournament.component';
import {CabinetDietComponent} from './pages/cabinet/cabinet-diet/cabinet-diet.component';
import {CabinetExercisesComponent} from './pages/cabinet/cabinet-exercises/cabinet-exercises.component';

const routes: Routes = [
  {
    path: '',
    component: LendingComponent
  },
  {
    path: Urls.authorization,
    component: AuthorizationComponent
  },
  {
    path: Urls.cabinet,
    component: CabinetComponent,
    children: [
      {
        path: '',
        component: CabinetHomeComponent,
      },
      {
        path: Urls.dashboard,
        component: CabinetDashboardComponent
      },
      {
        path: Urls.news,
        component: CabinetNewsComponent
      },
      {
        path: Urls.tournament,
        component: CabinetTournamentComponent
      },
      {
        path: Urls.diet,
        component: CabinetDietComponent
      },
      {
        path: Urls.exercises,
        component: CabinetExercisesComponent
      },
      {
        path: Urls.profile,
        component: ProfileComponent
      },
      {
        path: Urls.settings,
        component: SettingsComponent
      }
    ]
  },
  {
    path: Urls.confirmation,
    component: ConfirmationComponent
  },
  {
    path: Urls.settings,
    component: SettingsComponent
  },
  {
    path: Urls.successRegistration,
    component: SuccessRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
