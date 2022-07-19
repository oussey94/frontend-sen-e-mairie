import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreerActNComponent } from '../creer-act-n/creer-act-n.component';

@Component({
  selector: 'app-list-naissance',
  templateUrl: './list-naissance.component.html',
  styleUrls: ['./list-naissance.component.css']
})
export class ListNaissanceComponent implements AfterViewInit {
  constructor(  private dialog:MatDialog){
  
  }

  displayedColumns: string[] = ['matricule', 'name', 'numeroRegistre','lieuNaissance'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  searchKey!: string;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(CreerActNComponent,dialogConfig);
  }
}


export interface PeriodicElement {
  name: string;
  matricule: number;
  numeroRegistre: number;
  dateNaissance: string;
  lieuNaissance:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {matricule: 1, name: 'soda gueye', numeroRegistre: 1.0079, dateNaissance:'' ,lieuNaissance:'pikine'},
  {matricule: 2, name: 'khardiata', numeroRegistre: 4.0026,dateNaissance:'',lieuNaissance: 'pikine'},
  {matricule: 3, name: 'mbodji', numeroRegistre: 6.941, dateNaissance: '', lieuNaissance:'pikine'},
  {matricule: 4, name: 'Yapsy', numeroRegistre: 9.0122, dateNaissance:'',lieuNaissance: 'pikine'},
  {matricule: 5, name: 'fatou diaw', numeroRegistre: 10.811, dateNaissance:'',lieuNaissance:'pikine' },
  {matricule: 6, name: 'kya', numeroRegistre: 12.0107, dateNaissance:'' ,lieuNaissance:'pikine'},
  {matricule: 7, name: 'adama', numeroRegistre: 14.0067, dateNaissance:'',lieuNaissance:'pikine' }
];


