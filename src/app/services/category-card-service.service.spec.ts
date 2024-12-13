import { TestBed } from '@angular/core/testing';

import { CategoryCardServiceService } from './category-card-service.service';

describe('CategoryCardServiceService', () => {
  let service: CategoryCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
