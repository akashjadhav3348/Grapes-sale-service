import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecordComponent } from './all-record.component';

describe('AllRecordComponent', () => {
  let component: AllRecordComponent;
  let fixture: ComponentFixture<AllRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllRecordComponent]
    });
    fixture = TestBed.createComponent(AllRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
