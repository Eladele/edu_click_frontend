import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
import {AuthService} from '../../../core/services/auth.service';
// import { AuthService } from '../..//auth.service'; // Corrected import path

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Variables pour le formulaire de connexion
  loginEmail: string = '';
  loginPassword: string = '';

  // Variables pour le formulaire d'inscription
  registerEmail: string = '';
  registerPassword: string = '';
  registerFirstName: string = '';
  registerLastName: string = '';
  registerPhone: string = '';
  registerRole: string = '';

  // Variable pour basculer entre les formulaires
  isRegisterActive: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  // Méthode pour basculer entre les formulaires
  toggleForm(isRegister: boolean): void {
    this.isRegisterActive = isRegister;
  }

  onLoginSubmit(): void {
    console.log('Email:', this.loginEmail);
    console.log('Password:', this.loginPassword);

    this.authService.login({ email: this.loginEmail, password: this.loginPassword }).subscribe(
      () => {
        this.router.navigate(['/home']); // Redirection après connexion réussie
      },
      (error: any) => {
        console.error('Erreur de connexion', error);
      }
    );
  }


  // Méthode pour gérer la soumission du formulaire d'inscription
  onRegisterSubmit(): void {
    const registerData = {
      firstName: this.registerFirstName,
      lastName: this.registerLastName,
      phone: this.registerPhone,
      email: this.registerEmail,
      password: this.registerPassword,
      role: this.registerRole
    };

    this.authService.register(registerData).subscribe(
      (response: any) => {
        console.log('Inscription réussie', response);
        this.isRegisterActive = false;
      },
      (error: any) => {
        console.error('Erreur dinscription', error);
      }
    );
  }
}
