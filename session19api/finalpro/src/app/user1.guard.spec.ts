import { TestBed } from '@angular/core/testing';

import { User1Guard } from './user1.guard';

describe('User1Guard', () => {
  let guard: User1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(User1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
