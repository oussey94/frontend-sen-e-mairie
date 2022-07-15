import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActeDeceComponent } from './add-acte-dece.component';

describe('AddActeDeceComponent', () => {
  let component: AddActeDeceComponent;
  let fixture: ComponentFixture<AddActeDeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActeDeceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActeDeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
