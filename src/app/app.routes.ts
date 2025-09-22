import { Routes } from '@angular/router';
import { MainPage } from './features/main-page/main-page';
import { UserProfile } from './features/user/user-profile/user-profile';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout';
import { Login } from './core/login/login';
import { SignUp } from './core/sign-up/sign-up';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'inicio', component: MainPage },
      { path: 'perfil-usuario', component: UserProfile },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: Login },
      { path: 'sign-up', component: SignUp }
    ]
  }
];
