import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCallDialogComponent } from './video-call-dialog.component';

describe('VideoCallDialogComponent', () => {
  let component: VideoCallDialogComponent;
  let fixture: ComponentFixture<VideoCallDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCallDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCallDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
