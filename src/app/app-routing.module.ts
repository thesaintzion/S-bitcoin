import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AccountSetupComponent } from './components/account-setup/account-setup.component';
import { AuthGuardService } from './services/auth-guard.service';
import { QuizComponent } from './components/quiz/quiz.component';


const routes: Routes = [
   { path: 'app', loadChildren: './components/dasboard/dashboard.module#DashboardModule'},
  //  path: 'app', loadChildren: './components/dasboard/dashboard.module#DashboardModule', canActivate: [AuthGuardService] },
   {path: '',  component: HomePageComponent},
   {path: 'setup',  component: AccountSetupComponent},
   {path: 'quiz',  component: QuizComponent},
   { path: 'ngrx', loadChildren: './components/post/post.module#PostModule' },
   { path: '404', component: PageNotFoundComponent },
   { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
