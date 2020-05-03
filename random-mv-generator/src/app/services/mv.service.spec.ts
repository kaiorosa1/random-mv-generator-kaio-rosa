import { TestBed } from '@angular/core/testing';

import { MvService } from './mv.service';

describe('MvService', () => {
  let service: MvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
