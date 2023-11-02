import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendDefComponent } from './legend-def.component';

describe('LegendDefComponent', () => {
  let component: LegendDefComponent;
  let fixture: ComponentFixture<LegendDefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegendDefComponent]
    });
    fixture = TestBed.createComponent(LegendDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
