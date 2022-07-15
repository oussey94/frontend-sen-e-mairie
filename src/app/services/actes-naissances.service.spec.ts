import { TestBed } from '@angular/core/testing';

import { ActesNaissancesService } from './actes-naissances.service';

describe('ActesNaissancesService', () => {
  let service: ActesNaissancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActesNaissancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
