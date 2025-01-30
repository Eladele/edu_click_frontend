import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css']  // Assurez-vous que ce lien est correct
})
export class HeaderComponent {

  logoUrl = 'assets/images/logo.png';

  @Output() searchTriggered = new EventEmitter<boolean>();

  triggerSearch(event: Event) {
    event.preventDefault();  // Empêche le rechargement de la page
    this.searchTriggered.emit(true);  // Émet l'événement pour la recherche
    this.menuOpen = false;  // Ferme la sidebar après avoir cliqué
  }

  // Variable pour gérer l'ouverture/fermeture du menu sur mobile
  menuOpen = false;

   // Fonction pour basculer l'état du menu
   toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
