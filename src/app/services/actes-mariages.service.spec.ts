import { TestBed } from '@angular/core/testing';

import { ActesMariagesService } from './actes-mariages.service';

describe('ActesMariagesService', () => {
  let service: ActesMariagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActesMariagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
