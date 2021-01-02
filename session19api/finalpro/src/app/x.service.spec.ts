import { TestBed } from '@angular/core/testing';

import { XService } from './x.service';

describe('XService', () => {
  let service: XService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
