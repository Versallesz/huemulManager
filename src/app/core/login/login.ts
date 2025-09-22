import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login-service/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
private fb = inject(FormBuilder);
private router = inject(Router);
private loginService = inject(LoginService);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  async onSubmit() {
    if(this.loginForm.invalid) {
      return;
    }

    try{
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      const response = await this.loginService.login(email, password);
      console.log('Login successful:', response);
      await this.router.navigate(['/inicio']);
      await this.loginService.getAccount();
    } catch(error){
      console.log(error);
    }
  }
}
