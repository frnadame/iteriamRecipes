import { TestBed } from '@angular/core/testing';

import { PuppyApiService } from './puppy-api.service';

describe('PuppyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuppyApiService = TestBed.get(PuppyApiService);
    expect(service).toBeTruthy();
  });
});
