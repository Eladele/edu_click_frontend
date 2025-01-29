export interface IProfesseur {
  id: number;
  nom: string;
  prenom: string;
  image: string;
  ville: string;
  adresse: string;
  disponibilites: string[];
  prix: number;
  lieuxEnseignement: string[];
  biographie: string;
}
