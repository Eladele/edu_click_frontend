import { effect, Injectable, signal } from "@angular/core";
import { IProfesseur } from "../../shared/models/professeur.model";

@Injectable({
  providedIn: "root",
})
export class ProfesseurService {
  professeursState = signal<IProfesseur[]>([]);

  constructor() {
    effect(() => {
      this.professeursState.set([
        {
          id: 1,
          nom: "Abdallahi",
          prenom: "Lili",
          email: "abdallahi.lili@example.com",
          numerosTelephone: ["+222 12 345 6789"],
          image: "assets/images/cv-img.jpg",
          ville: "Nouakchott",
          adresse: "Centre ville",
          disponibilites: [
            "Lundi", 
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi",
            "Dimanche",
          ],
          prix: 5000,
          lieuxEnseignement: ["En ligne", "À domicile"],
          biographie: "Professeur expérimenté en Mathématiques.",
          evaluation: 4.8,
          genre: "Homme",
          introduction: "Passionné par l’enseignement des sciences.",
          education: ["Master en Mathématiques", "Licence en Enseignement"],
          devise: "Apprendre, c’est grandir.",
          matieres: [
            {
              id: 1,
              libelle: "Mathématiques",
              categorie: { id: 1, libelle: "Étude fondamentale" },
            },
          ],
          langues: ["Français", "Arabe"],
        },
        {
          id: 2,
          nom: "Amelika",
          prenom: "Kharoub",
          email: "amelika.kharoub@example.com",
          numerosTelephone: ["+222 98 765 4321"],
          image: "assets/images/prof2.jpg",
          ville: "Nouadhibou",
          adresse: "Centre ville",
          disponibilites: ["Vendredi", "Samedi", "Dimanche"],
          prix: 15000,
          lieuxEnseignement: ["En ligne"],
          biographie: "Professeur expérimenté en Base de données.",
          evaluation: 4.5,
          genre: "Femme",
          introduction: "Enseigner est ma passion.",
          education: [
            "Master en Informatique",
            "Certifications en bases de données",
          ],
          devise: "La connaissance est la clé du succès.",
          matieres: [
            {
              id: 2,
              libelle: "Base de données",
              categorie: { id: 2, libelle: "Informatique" },
            },
            {
              id: 3,
              libelle: "SQL",
              categorie: { id: 2, libelle: "Informatique" },
            },
          ],
          langues: ["Français", "Anglais"],
        },
        {
          id: 3,
          nom: "Moulaye",
          prenom: "Ahmed",
          email: "moulaye.ahmed@example.com",
          numerosTelephone: ["+222 77 888 9999"],
          image: "assets/images/prof3.jpg",
          ville: "Atar",
          adresse: "Quartier résidentiel",
          disponibilites: ["Lundi", "Mercredi", "Vendredi"],
          prix: 10000,
          lieuxEnseignement: ["À domicile"],
          biographie: "Spécialiste en Physique.",
          evaluation: 4.9,
          genre: "Homme",
          introduction: "Explorons les lois de la nature ensemble.",
          education: ["Doctorat en Physique", "Master en Sciences"],
          devise: "La science éclaire le monde.",
          matieres: [
            {
              id: 4,
              libelle: "Physique",
              categorie: { id: 1, libelle: "Étude fondamentale" },
            },
          ],
          langues: ["Arabe", "Anglais"],
        }
      ]);
    });
  }

  getAllProfesseurs() {
    return this.professeursState();
  }
}
