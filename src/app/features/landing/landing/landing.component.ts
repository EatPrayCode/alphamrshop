import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // document.getElementById('preloader').classList.add('hide');
  }

}
