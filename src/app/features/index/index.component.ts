import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink] 
 
})
export class IndexComponent {
  searchQuery: string = '';
  professeurs: any[] = [];

  // Simulation d'une recherche
  onSearch() {
    // Simuler une recherche ou appeler une API pour récupérer les professeurs
    this.professeurs = this.searchQuery
      ? [
          {
            id: 1,
            nom: 'Doe',
            prenom: 'John',
            ville: 'Nouakchott',
            adresse: 'Centre ville',
            disponibilites: ['Lundi', 'Mardi'],
            prix: 5000,
            lieuxEnseignement: ['En ligne', 'À domicile'],
            biographie: 'Professeur expérimenté en Mathématiques.',
          },
        ]
      : [];
  }
}
