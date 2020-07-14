import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../_layouts/dashboard-layout/dashboard-layout.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';



const routes: Routes = [
  {path: '', component: DashboardLayoutComponent, children:[
    {path: '', component: DashboardHomeComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
