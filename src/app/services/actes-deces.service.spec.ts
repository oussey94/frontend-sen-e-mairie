import { TestBed } from '@angular/core/testing';

import { ActesDecesService } from './actes-deces.service';

describe('ActesDecesService', () => {
  let service: ActesDecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActesDecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
