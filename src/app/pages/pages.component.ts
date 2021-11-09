import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ChooseAppSettingsModalComponent } from '../core/auth/components/choose-app-settings-modal/choose-app-settings-modal.component';
import { packsDataSampleDoctor } from '../mock-data/constants';
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

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() { }

  gotoNavlink(link:any){
    this.currentNavlink = link;
  }

  openSettingsDialog(): void {
    let dialogRef = this.dialog.open(ChooseAppSettingsModalComponent, {
      hasBackdrop: true,
      disableClose: false,
      height: '100vh',
      minWidth: '90%',
      position: {
        right: '0px',
        bottom: '0px',
      },
      data: {
        pack: packsDataSampleDoctor[0]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
