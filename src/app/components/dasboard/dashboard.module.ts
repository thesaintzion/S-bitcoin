import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from '../_layouts/dashboard-layout/dashboard-layout.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuillModule } from 'ngx-quill';
import { VoiceCallDialogComponent } from './_dialogs/voice-call-dialog/voice-call-dialog.component';
import { VideoCallDialogComponent } from './_dialogs/video-call-dialog/video-call-dialog.component';
import { ScreenShareDialogComponent } from './_dialogs/screen-share-dialog/screen-share-dialog.component';
import { EmojiDialogComponent } from './_dialogs/emoji-dialog/emoji-dialog.component';
import { ProfileComponent } from './_account/profile/profile.component';
import { UpgradeAccountComponent } from './_account/upgrade-account/upgrade-account.component';
import { ThemeComponent } from './_account/theme/theme.component';
import { InvestmentPlansComponent } from './_plans_packages/investment-plans/investment-plans.component';
import { PackagesComponent } from './_plans_packages/packages/packages.component';
import { depositsComponent } from './deposites/deposites.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { TransactionLogsComponent } from './transaction-logs/transaction-logs.component';
import { SupportComponent } from './support/support.component';
import { ReferComponent } from './refer/refer.component';


// import { StoreModule } from '@ngrx/store';
// import { useReducer } from 'src/app/reducers/user.reducer';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardHomeComponent,
    VoiceCallDialogComponent,
    VideoCallDialogComponent,
    ScreenShareDialogComponent,
    EmojiDialogComponent,
    ProfileComponent,
    UpgradeAccountComponent,
    ThemeComponent,
    InvestmentPlansComponent,
    PackagesComponent,
    depositsComponent,
    WithdrawalsComponent,
    TransactionLogsComponent,
    SupportComponent,
    ReferComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    // QuillModule,
    QuillModule.forRoot(),
    // StoreModule.forRoot({users: useReducer}),
    
  ],
  entryComponents: [VoiceCallDialogComponent, VideoCallDialogComponent, ScreenShareDialogComponent, EmojiDialogComponent]
})
export class DashboardModule { }
