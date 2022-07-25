import { ActesNaissancesService } from 'src/app/services/actes-naissances.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Acte_Naissance } from 'src/app/models/acte-naissance.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-acte-naissance',
  templateUrl: './detail-acte-naissance.component.html',
  styleUrls: ['./detail-acte-naissance.component.css']
})
export class DetailActeNaissanceComponent implements OnInit {

  public naissance: Acte_Naissance;

  constructor(
    private router: Router,
    private naissanceService: ActesNaissancesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    
    console.log("mon idd: ",this.activatedRoute.snapshot.params['id']);
    this.naissance = this.naissanceService.consulterNaissance(this.activatedRoute.snapshot.params['id']);

    /*this.naissanceService.getNaissanceById(this.activatedRoute.snapshot.params['id']).subscribe(c => {
      this.naissance = c;
    }); */
  }

  public backToList(): void {
    this.router.navigate(['/naissances']);
  }

}
