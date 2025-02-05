import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../templates/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfesseurService } from '../professeurs/professeur.service';
import { IProfesseur } from "../../shared/models/professeur.model";
import { MasterComponent } from "../../templates/master/master.component";
import { FooterComponent } from "../../templates/footer/footer.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, MatIconModule, MasterComponent, FooterComponent, HeaderComponent],
})
export class IndexComponent {
  searchQuery: string = '';
  professeurs: IProfesseur[] = []; 
  isSearchActive = false;
  suggestions: { label: string; type: string }[] = [];
  filteredSuggestions: { label: string; type: string }[] = [];

  constructor(private professeurService: ProfesseurService) {
    this.professeurs = this.professeurService.getAllProfesseurs();
    this.loadSuggestions();

  }

  onSearch() {
    const query = this.searchQuery.toLowerCase();
    this.professeurs = query
      ? this.professeurService.getAllProfesseurs().filter(prof =>
          prof.matieres && prof.matieres.some(matiere =>
            matiere.libelle.toLowerCase().includes(query) ||
            (matiere.categorie && matiere.categorie.libelle.toLowerCase().includes(query))
          )
        )
      : this.professeurService.getAllProfesseurs();
  
    // إخفاء الاقتراحات بعد البحث
    this.filteredSuggestions = [];
  }
  


  onSearchTriggered(active: boolean) {
    this.isSearchActive = active;
  }

  loadSuggestions() {
    const professeurs = this.professeurService.getAllProfesseurs();
  
    // Extraction des matières
    const matieres = professeurs
      .flatMap(prof => prof.matieres || [])
      .map(matiere => ({ label: matiere.libelle, type: 'matière' }));
  
    // Extraction des catégories
    const categories = [
      ...new Set(
        professeurs
          .flatMap(prof => prof.matieres || [])
          .map(matiere => matiere.categorie?.libelle)
          .filter(libelle => libelle)  // Élimine les valeurs vides
      )
    ].map(categorie => ({ label: categorie, type: 'catégorie' }));
  
    // Combinaison des matières et catégories
    this.suggestions = [...matieres, ...categories];
  
    console.log('Suggestions:', this.suggestions);  // Affiche toutes les suggestions
  }
   
  
  onInputChange() {
    console.log('Recherche:', this.searchQuery);  // Affiche la valeur de la recherche
    const query = this.searchQuery.toLowerCase();
    console.log('Query converti en minuscules:', query);  // Affiche la version en minuscules de la recherche
    this.filteredSuggestions = this.suggestions.filter(suggestion => {
      console.log('Suggestion label:', suggestion.label);  // Affiche le label de chaque suggestion
      return suggestion.label.toLowerCase().includes(query);
    });
    console.log('Suggestions filtrées:', this.filteredSuggestions);  // Affiche les suggestions filtrées
    this.loadSuggestions();
  }
  

  selectSuggestion(suggestion: { label: string; type: string }) {
    this.searchQuery = suggestion.label;
    this.filteredSuggestions = [];
    this.onSearch(); // تنفيذ البحث مباشرةً
  }
  
  ngOnInit() {
    setTimeout(() => {
      this.searchQuery = '';
      this.isSearchActive = false; 
    }, 0);
  }
} 
