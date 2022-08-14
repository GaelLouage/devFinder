import { TestBed } from '@angular/core/testing';

import { DevFinderService } from './dev-finder.service';

describe('DevFinderService', () => {
  let service: DevFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
