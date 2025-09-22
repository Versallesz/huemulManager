import { Component, inject, signal } from '@angular/core';
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
  userName = signal<string>('');


  async ngOnInit() {
    try{
      const account = await this.loginService.getAccount();
      this.userName.set(account.name);
    } catch(error){
      console.log('Error al obtener la cuenta', error);
    }
  }
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
