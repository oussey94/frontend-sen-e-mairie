import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActesDecesComponent } from './list-actes-deces.component';

describe('ListActesDecesComponent', () => {
  let component: ListActesDecesComponent;
  let fixture: ComponentFixture<ListActesDecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActesDecesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActesDecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
