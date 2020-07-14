import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenShareDialogComponent } from './screen-share-dialog.component';

describe('ScreenShareDialogComponent', () => {
  let component: ScreenShareDialogComponent;
  let fixture: ComponentFixture<ScreenShareDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenShareDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenShareDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
