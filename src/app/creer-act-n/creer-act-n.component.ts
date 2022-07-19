import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-act-n',
  templateUrl: './creer-act-n.component.html',
  styleUrls: ['./creer-act-n.component.css']
})
export class CreerActNComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
constructor(private formBuilder: FormBuilder,
  private router: Router,
  // private notificationService: NotificationService,
  // private alertService: AlertService ,
  public  dialogRef: MatDialogRef<CreerActNComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  this.registerForm = this.formBuilder.group({
    // roles: ['', Validators.required],
    nomPere: ['', [Validators.required]],
    nomComplet: ['', [Validators.required]],
    numeroRegistre: ['', [Validators.required]],
    lieuNaissance: ['', [Validators.required]],
    dateNaissance: ['', [Validators.required]],
    annee: ['', [Validators.required]],
  },
  {
  });
  console.log(this.registerForm);
}

ngOnInit(): void {
}
onClose() {
  this.dialogRef.close();
}

}
