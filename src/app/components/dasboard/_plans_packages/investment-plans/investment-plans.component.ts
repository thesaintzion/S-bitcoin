import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-investment-plans',
  templateUrl: './investment-plans.component.html',
  styleUrls: ['./investment-plans.component.scss']
})
export class InvestmentPlansComponent implements OnInit {
  constructor(public sharedService: SharedService) { }


  setTheme(){
    let theme = localStorage.getItem('theme');
    if(theme != null){
this.sharedService.THEME = theme;
    }
  }

  ngOnInit() {
    this.setTheme()
  }

}
