import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from '../core/guards/check-login.guard';
import { ForgetPasswordPageComponent } from './forget-password-page/forget-password-page.component';
import { LandingPageComponent } from './landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
