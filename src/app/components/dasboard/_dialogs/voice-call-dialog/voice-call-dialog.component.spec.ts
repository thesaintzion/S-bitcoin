import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceCallDialogComponent } from './voice-call-dialog.component';

describe('VoiceCallDialogComponent', () => {
  let component: VoiceCallDialogComponent;
  let fixture: ComponentFixture<VoiceCallDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceCallDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceCallDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
