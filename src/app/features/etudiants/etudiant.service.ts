import { effect, Injectable, signal } from '@angular/core';
import { IEtudiant } from '../../shared/models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  etudiantsState = signal<IEtudiant[]>([]);

  constructor() {
    effect(() => {
      this.etudiantsState.set([
        {
          id: 1,
          nom: 'Mohamed',
          prenom: 'Ahmed',
          email: 'mohamed.ahmed@example.com',
          numerosTelephone: ['+222 12 345 6789'],
          niveau: 'Licence 3',
          matieres: [ {id: 1, nom: 'Mathématiques'}, {id: 2, nom: 'Programmation C'}]
        },
        {
          id: 2,
          nom: 'Hayati',
          prenom: 'Diallo',
          email: 'haya.diallo@example.com',
          numerosTelephone: ['+222 98 765 4321'],
          niveau: 'Master 1',
          matieres: [{id : 3 , nom :'Base de données'}, {id : 2, nom : 'Programmation C'}]
        }
      ]);
    });
  }

  getAllEtudiants() {
    return this.etudiantsState();
  }

  etudiantState = signal<IEtudiant>({
    id: 1,
    nom: 'Mohamed',
    prenom: 'Ahmed',
    email: 'mohamed.ahmed@example.com',
    numerosTelephone: ['+222 12 345 6789'],
    niveau: 'Licence 3',
    matieres: [
      { id: 1, nom: 'Mathématiques' },
      { id: 2, nom: 'Informatique' }
    ]
  });

  getEtudiant() {
    return this.etudiantState();
  }
}
