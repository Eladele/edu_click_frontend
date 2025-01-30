import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Variables pour le formulaire de connexion
  loginEmail: string = '';
  loginPassword: string = '';

  // Variables pour le formulaire d'inscription
  registerEmail: string = '';
  registerPassword: string = '';
  registerFirstName : string ='';
  registerLastName : string ='';
  registerPhone : String ='';
  registerRole : string='';

  // Variable pour basculer entre les formulaires
  isRegisterActive: boolean = false;

  constructor(private router: Router) {}

  // Méthode pour basculer entre les formulaires
  toggleForm(isRegister: boolean): void {
    this.isRegisterActive = isRegister;
  }

  // Méthode pour gérer la soumission du formulaire de connexion
  onLoginSubmit(): void {
    console.log('Login Email:', this.loginEmail);
    console.log('Login Password:', this.loginPassword);
    // Ajoutez ici la logique pour la connexion
    this.router.navigate(['/home']);
  }

  // Méthode pour gérer la soumission du formulaire d'inscription
  onRegisterSubmit(): void {
    console.log('Register Name:', this.registerFirstName);
    console.log('Register Lastname:', this.registerLastName);
    console.log('phone ',this.registerPhone)
    console.log('Register Email:', this.registerEmail);
    console.log('Register Password:', this.registerPassword);
    // Ajoutez ici la logique pour l'inscription
    this.router.navigate(['/home']);
  }
}
