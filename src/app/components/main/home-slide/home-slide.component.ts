import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.scss']
})
export class HomeSlideComponent implements OnInit {

  constructor(private config: NgbCarouselConfig) { 

    this.config.interval =  6000;  
    this.config.wrap = true;  
    this.config.keyboard = true;  
    this.config.pauseOnHover = true;
  }

  ngOnInit() {
  }

}
