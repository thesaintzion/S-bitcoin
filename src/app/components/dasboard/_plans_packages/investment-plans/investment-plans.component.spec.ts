import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPlansComponent } from './investment-plans.component';

describe('InvestmentPlansComponent', () => {
  let component: InvestmentPlansComponent;
  let fixture: ComponentFixture<InvestmentPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
