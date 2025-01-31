import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-complete-profile-etud',
  imports: [ReactiveFormsModule],
  templateUrl: './complete-profile-etud.component.html',
  styleUrl: './complete-profile-etud.component.css'
})
export class CompleteProfileEtudComponent  implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      niveau: ['']
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Données du formulaire :', this.profileForm.value);
      // Ici, tu peux envoyer les données au backend via un service
    }
  }
}