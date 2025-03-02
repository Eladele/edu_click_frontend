import { ICategorie } from "./categorie.model";

export interface IMatiere {
    id: number;
    libelle: string;
    categorie: ICategorie ;
  }