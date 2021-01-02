import { TestBed } from '@angular/core/testing';

import { AGuard } from './a.guard';

describe('AGuard', () => {
  let guard: AGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
