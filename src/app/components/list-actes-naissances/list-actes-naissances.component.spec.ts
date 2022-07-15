import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActesNaissancesComponent } from './list-actes-naissances.component';

describe('ListActesNaissancesComponent', () => {
  let component: ListActesNaissancesComponent;
  let fixture: ComponentFixture<ListActesNaissancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActesNaissancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActesNaissancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
