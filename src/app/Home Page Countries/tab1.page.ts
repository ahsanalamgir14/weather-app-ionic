import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
post: any;


  constructor(public homeService: HomeService) {}

  nhoNiNIT() { 
    this.searchPost();
  }

  searchPost() {
    this.homeService().subscribe(
      next: payload => {
        this.post = payload;
      },
      error: error => {

      }
    )
  }

}
