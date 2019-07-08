import { TestBed } from '@angular/core/testing';

import { ScopoService } from './scopo.service';

describe('ScopoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScopoService = TestBed.get(ScopoService);
    expect(service).toBeTruthy();
  });
});
