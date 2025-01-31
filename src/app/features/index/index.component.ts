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

  constructor(private professeurService: ProfesseurService) {
    this.professeurs = this.professeurService.getAllProfesseurs();
  }

  onSearch() {
    this.professeurs = this.searchQuery
      ? this.professeurService.getAllProfesseurs().filter(prof =>
          prof.matieres && prof.matieres.some(matiere =>
            matiere.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        )
      : this.professeurService.getAllProfesseurs();
  }
  
  isSearchActive = false;

  onSearchTriggered(active: boolean) {
    this.isSearchActive = active;
  }

  ngOnInit() {
    setTimeout(() => {
      this.searchQuery = '';
      this.isSearchActive = false; 
    }, 0);
  }
}
