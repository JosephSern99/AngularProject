import { TestBed } from '@angular/core/testing';

import { OralService } from './oral.service';

describe('OralService', () => {
  let service: OralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
