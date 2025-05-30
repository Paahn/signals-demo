import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCalculatorComponent } from './signal-calculator.component';

describe('SignalCalculatorComponent', () => {
  let component: SignalCalculatorComponent;
  let fixture: ComponentFixture<SignalCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalCalculatorComponent]
    });
    fixture = TestBed.createComponent(SignalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
