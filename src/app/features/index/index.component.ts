import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../templates/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfesseurService } from '../professeurs/professeur.service';
import { IProfesseur } from "../../shared/models/professeur.model";
import { MasterComponent } from "../../templates/master/master.component";



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, HeaderComponent, MatIconModule, MasterComponent],
})
export class IndexComponent {
  searchQuery: string = '';
  professeurs: IProfesseur[] = []; // Initialize as an empty array

  constructor(private professeurService: ProfesseurService) {
    this.professeurs = this.professeurService.getAllProfesseurs();
  }

  onSearch() {
    this.professeurs = this.searchQuery
      ? this.professeurService.getAllProfesseurs().filter(prof => 
          prof.nom.includes(this.searchQuery))
      : []; // Ensure it's an empty array if no search query
  }

  isSearchActive = false;

  onSearchTriggered(active: boolean) {
    this.isSearchActive = active;
  }


  ngOnInit() {
    setTimeout(() => {
      this.searchQuery = '';
      this.isSearchActive = false; // Empêche d'afficher le formulaire après refresh
    }, 0);
  }
  
  
  
}
