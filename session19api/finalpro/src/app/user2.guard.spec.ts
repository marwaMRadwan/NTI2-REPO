import { TestBed } from '@angular/core/testing';

import { User2Guard } from './user2.guard';

describe('User2Guard', () => {
  let guard: User2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(User2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
