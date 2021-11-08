import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  navlinks: any = [{
    viewName: 'Home',
    icon: '',
    route: 'home'
  }, {
    viewName: 'Organiser',
    icon: '',
    route: 'organiser'
  },
  {
    viewName: 'Grow',
    icon: '',
    route: 'investment-packs'
  },
  {
    viewName: 'Store',
    icon: '',
    route: 'store'
  },
  {
    viewName: 'Checkout',
    icon: '',
    route: 'checkout'
  }];

  currentNavlink:any = this.navlinks[0];

  constructor() { }

  ngOnInit() { }

  gotoNavlink(link:any){
    this.currentNavlink = link;
  }

}
