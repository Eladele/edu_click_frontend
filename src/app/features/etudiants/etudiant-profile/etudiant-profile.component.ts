import { Component, OnInit } from '@angular/core';
import { IEtudiant } from '../../../shared/models/etudiant.model';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant-profile',
  imports: [],
  templateUrl: './etudiant-profile.component.html',
  standalone: true,
  styleUrl: './etudiant-profile.component.css'
})
export class EtudiantProfileComponent implements OnInit {
  etudiant!: IEtudiant ;

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.etudiant = this.etudiantService.getEtudiant();
  }
}
