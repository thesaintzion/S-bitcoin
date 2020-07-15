import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  fancyBg = true;
  items = [];
  isHandset$: Observable<boolean>
  isHandset = false;
  users = [];
  account;
  plans;
  others;

  constructor(
     private breakpointObserver: BreakpointObserver,
     public sharedService: SharedService,
     private title: Title,
     private meta: Meta,
     private apiService: ApiService,
     ) {

      this.account = [
        {
          name: 'Profile Settings',
          icon: 'person',
          iconClass: '',
          link: ''
        },
        {
          name: 'Upgrade Account',
          icon: 'account_balance_wallet',
          iconClass: '',
          link: ''
        }
      ];
      this.plans = [
        {
          name: 'Investment Plans',
          icon: 'account_balance_wallet',
          iconClass: '',
          link: ''
        },
        {
          name: 'Packages',
          icon: 'account_balance_wallet',
          iconClass: '',
          link: ''
        }
      ];

      this.others = [
        {
          name: 'Deposites',
          icon: 'add_box',
          iconClass: '',
          link: ''
        },
        {
          name: 'Withdrawals',
          icon: 'monetization_on',
          iconClass: 'text-primary',
          link: ''
        },
        {
          name: 'Transaction Logs',
          icon: 'timelapse',
          iconClass: '',
          link: ''
        },
        {
          name: 'Packages',
          icon: 'monetization_on',
          iconClass: 'text-success',
          link: ''
        },
        {
          name: 'Refer a User',
          icon: 'group',
          iconClass: 'text-primary',
          link: ''
        },
        {
          name: 'Packages',
          icon: 'account_balance_wallet',
          iconClass: '',
          link: ''
        }
      ];

       let items = [
         {},{},{},{},{},{}
        ]
        this.items = items;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
          map(result => result.matches),
          shareReplay()
        );
     }
  

    


    //  Logout dialog
  logOutDialog(): void {
    localStorage.removeItem('API_KEY');

   }

  //  
  closeMen(sidenav){
    this.breakpointObserver
        .observe(['(max-width: 767px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            return  sidenav.toggle();
          } else {
            return null;
          }
        });
  }

  // 
  setHeader(){
    this.title.setTitle('ChatApp');
    this.meta.updateTag({ name: 'description', content: 'Welcome back to'});
    this.meta.updateTag({ name: 'theme-color', content: '#C4C4C4'});
  }


  ngOnInit() {
this.setHeader();
    this.breakpointObserver
    .observe(['(max-width: 767px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isHandset = true;
      } else {
        this.isHandset = false;
      }
    });
    
  setTimeout( () =>{
    this.fancyBg = false;
  }, 3000);

  window.scrollTo(0, 0); 
  }
  

}
