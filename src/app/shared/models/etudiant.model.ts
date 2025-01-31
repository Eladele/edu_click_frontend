export interface IEtudiant {
    id: number;
    nom: string;
    prenom: string;
    numerosTelephone: string[];
    email: string;
    niveau: string;
    matieres: { id: number; nom: string }[];  }
  