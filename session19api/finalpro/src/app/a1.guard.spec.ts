import { TestBed } from '@angular/core/testing';

import { A1Guard } from './a1.guard';

describe('A1Guard', () => {
  let guard: A1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(A1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
