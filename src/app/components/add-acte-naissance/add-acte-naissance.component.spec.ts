import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActeNaissanceComponent } from './add-acte-naissance.component';

describe('AddActeNaissanceComponent', () => {
  let component: AddActeNaissanceComponent;
  let fixture: ComponentFixture<AddActeNaissanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActeNaissanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActeNaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
