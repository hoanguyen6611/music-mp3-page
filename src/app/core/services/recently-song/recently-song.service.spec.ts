import { TestBed } from '@angular/core/testing';

import { RecentlySongService } from './recently-song.service';

describe('RecentlySongService', () => {
  let service: RecentlySongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentlySongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
