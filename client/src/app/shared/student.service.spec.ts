import { TestBed, inject } from '@angular/core/testing';

import { studentService } from './student.service';

describe('studentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [studentService]
    });
  });

  it('should be created', inject([studentService], (service: studentService) => {
    expect(service).toBeTruthy();
  }));
});
