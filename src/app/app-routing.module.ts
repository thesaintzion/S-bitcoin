import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/main/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/main/home-page/home-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MainLayoutComponent } from './components/_layouts/main-layout/main-layout.component';

const routes: Routes = [
   { path: 'app', loadChildren: './components/dasboard/dashboard.module#DashboardModule'},
  //  path: 'app', loadChildren: './components/dasboard/dashboard.module#DashboardModule', canActivate: [AuthGuardService] },
 
   {path: '', component: MainLayoutComponent, children:[
    {path: '',  component: HomePageComponent},
  ]},
   { path: '404', component: PageNotFoundComponent },
   { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
