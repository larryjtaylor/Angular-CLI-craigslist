import { TestBed, inject } from '@angular/core/testing';

import { HousingService } from './housing.service';

describe('HousingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HousingService]
    });
  });

  it('should ...', inject([HousingService], (service: HousingService) => {
    expect(service).toBeTruthy();
  }));
});