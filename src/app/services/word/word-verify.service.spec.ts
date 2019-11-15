import { TestBed } from '@angular/core/testing';

import { WordVerifyService } from './word-verify.service';

describe('WordVerifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordVerifyService = TestBed.get(WordVerifyService);
    expect(service).toBeTruthy();
  });
});
