import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isHandset: boolean;
  constructor(   private breakpointObserver: BreakpointObserver,) { }

  ngOnInit() {
    this.breakpointObserver
    .observe(['(max-width: 767px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isHandset = true;
      } else {
        this.isHandset = false;
      }
    });
  }

}
