import { Routes } from '@angular/router';
import { MainPage } from './features/main-page/main-page';
import { UserProfile } from './features/user/user-profile/user-profile';

export const routes: Routes = [
  { path: 'inicio', component: MainPage },
  { path: 'perfil-usuario', component: UserProfile },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];
