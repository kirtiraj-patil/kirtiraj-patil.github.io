import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgDesignComponent } from './bg-design.component';

describe('BgDesignComponent', () => {
  let component: BgDesignComponent;
  let fixture: ComponentFixture<BgDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BgDesignComponent]
    });
    fixture = TestBed.createComponent(BgDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
