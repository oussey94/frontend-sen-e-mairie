import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Acte_Naissance } from 'src/app/models/acte-naissance.model';

@Component({
  selector: 'app-edit-acte-naissance',
  templateUrl: './edit-acte-naissance.component.html',
  styleUrls: ['./edit-acte-naissance.component.css']
})
export class EditActeNaissanceComponent implements OnInit {

  naissanceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditActeNaissanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Acte_Naissance
  ) { }

  ngOnInit() {

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

    this.naissanceForm.patchValue({
      region: this.data.region,
      departement: this.data.departement,
      arrondissement: this.data.arrondissement,
      collectivite_locale: this.data.collectivite_locale,
      centre: this.data.centre,
      annee_extrait_int: this.data.annee_extrait_int,
      annee_extrait_string: this.data.annee_extrait_string,
      num_extrait_int: this.data.num_extrait_int,
      num_extrait_string: this.data.num_extrait_string,
      date_naissance: this.data.date_naissance,
      heure_naissance: this.data.heure_naissance,
      sexe_enfant: this.data.sexe_enfant,
      lieu_de_naissance: this.data.lieu_de_naissance,
      nom_enfant: this.data.nom_enfant,
      prenom_enfant: this.data.prenom_enfant,
      prenom_pere: this.data.prenom_pere,
      nom_maman: this.data.nom_maman,
      prenom_maman: this.data.prenom_maman,
      pays_naissance: this.data.pays_naissance,
    });

  }

  public editNaissance(): void{
      this.data.region = this.naissanceForm.value.nom;
      this.data.departement = this.naissanceForm.value.departement;
      this.data.arrondissement = this.naissanceForm.value.arrondissement;
      this.data.collectivite_locale = this.naissanceForm.value.collectivite_locale;
      this.data.centre = this.naissanceForm.value.centre;
      this.data.annee_extrait_int = this.naissanceForm.value.annee_extrait_int;
      this.data.annee_extrait_string = this.naissanceForm.value.annee_extrait_string;
      this.data.num_extrait_int = this.naissanceForm.value.num_extrait_int;
      this.data.num_extrait_string = this.naissanceForm.value.num_extrait_string;
      this.data.date_naissance = this.naissanceForm.value.date_naissance;
      this.data.heure_naissance = this.naissanceForm.value.heure_naissance;
      this.data.sexe_enfant = this.naissanceForm.value.sexe_enfant;
      this.data.lieu_de_naissance = this.naissanceForm.value.lieu_de_naissance;
      this.data.nom_enfant = this.naissanceForm.value.nom_enfant;
      this.data.prenom_enfant = this.naissanceForm.value.prenom_enfant;
      this.data.prenom_pere = this.naissanceForm.value.prenom_pere;
      this.data.nom_maman = this.naissanceForm.value.nom_maman;
      this.data.prenom_maman = this.naissanceForm.value.prenom_maman;
      this.data.pays_naissance = this.naissanceForm.value.pays_naissance;

      this.dialogRef.close(Object.assign(new Acte_Naissance(), this.naissanceForm.value));
  }

}
