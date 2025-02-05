import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-complete-profile-prof',
  standalone: true, // Indique que ce composant est autonome
  imports: [ReactiveFormsModule, CommonModule], // Ajoutez CommonModule ici
  templateUrl: './complete-profile-prof.component.html',
  styleUrls: ['./complete-profile-prof.component.css']
})
export class CompleteProfileProfComponent implements OnInit {

  profileForm!: FormGroup;
  currentSection: number = 1; // Section actuelle

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      genre: ['Homme'], // Ajouter le champ genre
      email: ['', [Validators.required, Validators.email]],
      numerosTelephone: ['', Validators.required], // Corriger le nom du champ
      adresse: [''],
      biographie: [''],
      education: [''],
      matieres: [''],
      langues: ['']
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Données du formulaire :', this.profileForm.value);
      // Ici, tu peux envoyer les données au backend via un service
    }
  }

  nextSection(): void {
    if (this.currentSection < 4) { // Supposons que vous avez 4 sections
      this.currentSection++;
    }
  }

  prevSection(): void {
    if (this.currentSection > 1) {
      this.currentSection--;
    }
  }

   toggleTheme(): void {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
  
    if (currentTheme === 'dark') {
      body.setAttribute('data-theme', 'light');
    } else {
      body.setAttribute('data-theme', 'dark');
    }
  }
}