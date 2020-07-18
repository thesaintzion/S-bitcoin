import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/main/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedService } from './services/shared.service';
import { DialogComponent } from './components/_dialogs/dialog/dialog.component';
import { HomePageComponent } from './components/main/home-page/home-page.component';
import { StoreModule } from '@ngrx/store';
import {ConnectReducers}  from './store/shared/connect-reducers/connect-reducers'
import { ScrollUpComponent } from './shared/components/scroll-up/scroll-up.component';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffect } from './_ngrx-store/effects/article.effects';
import { SocialLoginModule, AuthServiceConfig} from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider,  LoginOpt } from "angularx-social-login";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { AuthenticationService } from './services/authentication.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HomeSlideComponent } from './components/main/home-slide/home-slide.component';
import { AboutComponent } from './components/main/about/about.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { LoginComponent } from './components/main/login/login.component';
import { PlansComponent } from './components/main/plans/plans.component';
import { RegisterComponent } from './components/main/register/register.component';
import { TermsComponent } from './components/main/terms/terms.component';
import { MainLayoutComponent } from './components/_layouts/main-layout/main-layout.component';
 
 
const fbLoginOptions: LoginOpt = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  return_scopes: true,
  enable_profile_selector: true
}; 
 

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1045647614796-6jmmuod4evtcbi5a5ip5ugp9nte546d0.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("263143651446154")
  }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DialogComponent,
    HomePageComponent,
    ScrollUpComponent,
    HomeSlideComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    PlansComponent,
    RegisterComponent,
    TermsComponent,
    MainLayoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(ConnectReducers.reduers),
    EffectsModule.forRoot([ArticleEffect]),
    SocialLoginModule
  ],
  providers: [SharedService,  AuthenticationService,
    
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass:  AuthInterceptorService,
      multi: true
    }
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


