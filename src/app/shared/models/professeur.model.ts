import { IMatiere } from "./matiere.model";

export interface IProfesseur {
  id: number;
  nom: string;
  prenom: string;
  numerosTelephone: string[];
  image: string;
  ville: string;
  adresse: string;
  disponibilites: string[];
  prix: number;
  lieuxEnseignement: string[];
  biographie: string;
  evaluation: number;
  genre: string;
  email: string;
  introduction: string;
  education: string[];
  devise: string;
  matieres: IMatiere [];
  langues: string[];
}
