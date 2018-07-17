import { TestBed, inject } from '@angular/core/testing';

import { GreetService } from './greet.service';

describe('GreetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreetService]
    });
  });

  it('should be created', inject([GreetService], (service: GreetService) => {
    expect(service).toBeTruthy();
  }));
});
