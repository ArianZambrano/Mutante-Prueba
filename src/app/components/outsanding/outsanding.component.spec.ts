import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsandingComponent } from './outsanding.component';

describe('OutsandingComponent', () => {
  let component: OutsandingComponent;
  let fixture: ComponentFixture<OutsandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
