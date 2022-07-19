import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerActNComponent } from './creer-act-n.component';

describe('CreerActNComponent', () => {
  let component: CreerActNComponent;
  let fixture: ComponentFixture<CreerActNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerActNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerActNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
