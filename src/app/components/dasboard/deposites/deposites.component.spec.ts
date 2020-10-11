import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { depositsComponent } from './deposites.component';

describe('depositsComponent', () => {
  let component: depositsComponent;
  let fixture: ComponentFixture<depositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ depositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(depositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
