import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organiser',
  templateUrl: './organiser.component.html',
  styleUrls: ['./organiser.component.scss']
})
export class OrganiserComponent implements OnInit {

  leftList: any = [{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {}];

  constructor() { }

  ngOnInit(): void { }

}
