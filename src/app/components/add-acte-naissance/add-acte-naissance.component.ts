import { Acte_Naissance } from 'src/app/models/acte-naissance.model';
import { ActesNaissancesService } from 'src/app/services/actes-naissances.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-acte-naissance',
  templateUrl: './add-acte-naissance.component.html',
  styleUrls: ['./add-acte-naissance.component.css']
})
export class AddActeNaissanceComponent implements OnInit {

  newActeNaissance = new Acte_Naissance();
  naissanceForm: FormGroup;
  isLinear = false;

  constructor( 
    private fb: FormBuilder,
    private naissanceService: ActesNaissancesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.naissanceForm = this.fb.group({
      region: ['',[Validators.required]],
      departement: ['', Validators.required],
      arrondissement: ['', Validators.required],
      collectivite_locale: ['', Validators.required],
      centre: ['', Validators.required],
      annee_extrait_int: ['', Validators.required],
      annee_extrait_string: ['', Validators.required],
      num_extrait_int: ['', Validators.required],
      num_extrait_string: ['', Validators.required],
      date_naissance: ['', Validators.required],
      heure_naissance: ['', Validators.required],
      sexe_enfant: ['', Validators.required],
      lieu_de_naissance: ['', Validators.required],
      nom_enfant: ['', Validators.required],
      prenom_enfant: ['', Validators.required],
      prenom_pere: ['', Validators.required],
      nom_maman: ['', Validators.required],
      prenom_maman: ['', Validators.required],
      pays_naissance: ['', Validators.required],
    });

  }

  addActeDeNaissance(){
    if(this.naissanceForm.valid){
      if(this.naissanceForm.dirty){
        const naissance : Acte_Naissance = {
          ...this.newActeNaissance,
          ...this.naissanceForm.value
        };

        this.naissanceService.addNaissance(naissance).subscribe({
          next: () =>this.saveCompleted(),
          error: (err) => {alert("Probléme lors de l'ajout !!!");}
        });
      }
    }
  }

  saveCompleted(): void{
    this.naissanceForm.reset();
    this.router.navigate(['/naissances']);
  }

}
