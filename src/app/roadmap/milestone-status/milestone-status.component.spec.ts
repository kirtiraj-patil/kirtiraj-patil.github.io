import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneStatusComponent } from './milestone-status.component';

describe('MilestoneStatusComponent', () => {
  let component: MilestoneStatusComponent;
  let fixture: ComponentFixture<MilestoneStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilestoneStatusComponent]
    });
    fixture = TestBed.createComponent(MilestoneStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
