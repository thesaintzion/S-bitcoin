import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositesComponent } from './deposites.component';

describe('DepositesComponent', () => {
  let component: DepositesComponent;
  let fixture: ComponentFixture<DepositesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
