import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActesMariagesComponent } from './list-actes-mariages.component';

describe('ListActesMariagesComponent', () => {
  let component: ListActesMariagesComponent;
  let fixture: ComponentFixture<ListActesMariagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActesMariagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActesMariagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
