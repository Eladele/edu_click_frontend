import { effect, Injectable, signal } from '@angular/core';
import { IProfesseur } from '../../shared/models/professeur.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {
  professeursState = signal<IProfesseur[]>([]);

  constructor() {

    effect(()=>{
      this.professeursState.set([
        {
          id: 1,
          nom: 'Abdallahi',
          prenom: 'Lili',
          image: 'assets/images/cv-img.jpg',
          ville: 'Nouakchott',
          adresse: 'Centre ville',
          disponibilites: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
          prix: 5000,
          lieuxEnseignement: ['En ligne', 'À domicile'],
          biographie: 'Professeur expérimenté en Mathématiques.',
        },
        {
          id: 1,
          nom: 'AMelika',
          prenom: 'Kharoub',
          image: 'assets/images/prof2.jpg',
          ville: 'Nouadhbou',
          adresse: 'Centre ville',
          disponibilites: ['Vendredi', 'Samedi', 'Dimanche'],
          prix: 15000,
          lieuxEnseignement: ['En ligne'],
          biographie: 'Professeur expérimenté en Base de donnees.',
        },

      ]);
    })
   }
   getAllProfesseurs(){
    return this.professeursState();
  }
}
