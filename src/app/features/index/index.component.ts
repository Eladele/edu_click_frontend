import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../templates/header/header.component';
interface Professeur {
  id: number;
  nom: string;
  prenom: string;
  image : string;
  ville: string;
  adresse: string;
  disponibilites: string[];
  prix: number;
  lieuxEnseignement: string[];
  biographie: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, HeaderComponent],
})
export class IndexComponent {
  searchQuery: string = '';
  professeurs: Professeur[] = []; // Initialize as an empty array

  onSearch() {
    this.professeurs = this.searchQuery
      ? [
          {
            id: 1,
            nom: 'Doe',
            prenom: 'John',
            image: 'assets/images/professeur1.jpg',
            ville: 'Nouakchott',
            adresse: 'Centre ville',
            disponibilites: ['Lundi', 'Mardi'],
            prix: 5000,
            lieuxEnseignement: ['En ligne', 'À domicile'],
            biographie: 'Professeur expérimenté en Mathématiques.',
          },
        ]
      : []; // Ensure it's an empty array if no search query
  }
}
