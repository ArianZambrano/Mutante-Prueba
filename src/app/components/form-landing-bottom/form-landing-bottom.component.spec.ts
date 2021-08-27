import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLandingBottomComponent } from './form-landing-bottom.component';

describe('FormLandingBottomComponent', () => {
  let component: FormLandingBottomComponent;
  let fixture: ComponentFixture<FormLandingBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLandingBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLandingBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
