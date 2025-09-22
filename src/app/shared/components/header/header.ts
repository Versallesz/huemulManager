import { Component, inject } from '@angular/core';
import { LoginService } from '../../../core/services/login-service/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private loginService = inject(LoginService);
  private router = inject(Router);

  async logout(){
    try{
      await this.loginService.logout();
      console.log('Logout successful');
      this.router.navigate(['/login']);
    } catch(error){
      console.log('Logout failed', error);
      }
  }
}
