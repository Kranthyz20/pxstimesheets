import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SharedService } from 'src/app/services/shared.service';
import { homeMenuItems } from 'src/app/shared/homeMenuItems';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('snav', { static: false }) public sidenav: MatSidenav;

  toggleSideNav: boolean = false;
  navList = homeMenuItems;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sharedService.setSideNav(this.sidenav);
  }

  closeMenu() {
    this.sharedService.toggleSideNav();
  }
}
