import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { studentListComponent } from './student-list.component';

describe('studentListComponent', () => {
  let component: studentListComponent;
  let fixture: ComponentFixture<studentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ studentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(studentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
