import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingLayoutComponent } from './loading-layout.component';

describe('LoadingLayoutComponent', () => {
  let component: LoadingLayoutComponent;
  let fixture: ComponentFixture<LoadingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
