import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../_layouts/dashboard-layout/dashboard-layout.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ProfileComponent } from './_account/profile/profile.component';
import { UpgradeAccountComponent } from './_account/upgrade-account/upgrade-account.component';
import { InvestmentPlansComponent } from './_plans_packages/investment-plans/investment-plans.component';
import { PackagesComponent } from './_plans_packages/packages/packages.component';
import { depositsComponent } from './deposites/deposites.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { TransactionLogsComponent } from './transaction-logs/transaction-logs.component';
import { ReferComponent } from './refer/refer.component';
import { SupportComponent } from './support/support.component';



const routes: Routes = [
  {path: '', component: DashboardLayoutComponent, children:[
    {path: '', component: DashboardHomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'upgrade-account', component: UpgradeAccountComponent},
    {path: 'investment-plans', component: InvestmentPlansComponent},
    {path: 'packages', component: PackagesComponent},
    {path: 'deposit', component: depositsComponent},
    {path: 'withdrawals', component: WithdrawalsComponent},
    {path: 'transaction-logs', component: TransactionLogsComponent},
    {path: 'refer', component: ReferComponent},
    {path: 'support', component: SupportComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
