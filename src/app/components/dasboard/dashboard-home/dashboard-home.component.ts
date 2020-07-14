import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { filter } from 'rxjs/operators'
import { Subscription } from 'rxjs';
import { Router,  NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  siteVersion: any;
isHandset = false;
  constructor(private breakpointObserver: BreakpointObserver, public sharedService: SharedService, private router: Router, private titleService: Title ) {
this.sharedService.activityInfo.name = 'Admin';
this.sharedService.activityInfo.showArrowBack = false;

   }


  // start form up...
  startUp(){
  return  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      () => window.scrollTo(0, 0));  
  }

    // Set page title
    dynamicTitle(){
      this.titleService.setTitle('');
      const appTitle = this.titleService.getTitle();
      this.titleService.setTitle(`${this.sharedService.activityInfo.name} - Just a Thought`);
    }

    // Handle displayed page
    handlePageVersion(){
      this.breakpointObserver
      .observe(['(max-width: 767px)'])
      .subscribe((state: BreakpointState) => {
        
        // if (state.matches) {
        //   this.isHandset = true;
        //   // this.siteVersion = DashboardUsersComponent;
        //   this.siteVersion = DashboardHistoryComponent;
        // } else {
        //   this.isHandset = false;
        //   this.siteVersion = DashboardProfileComponent;
        //   // this.siteVersion = DashboardUsersComponent;
        // }
      });
    }

  ngOnInit() {
    this.startUp();
   this.dynamicTitle();
  //  this.siteVersion = DashboardProfileComponent;
  this.router.navigate(['/app']);

  this.handlePageVersion();
   
  }

}
