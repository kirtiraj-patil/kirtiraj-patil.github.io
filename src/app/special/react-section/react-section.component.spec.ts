import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactSectionComponent } from './react-section.component';

describe('ReactSectionComponent', () => {
  let component: ReactSectionComponent;
  let fixture: ComponentFixture<ReactSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactSectionComponent]
    });
    fixture = TestBed.createComponent(ReactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
