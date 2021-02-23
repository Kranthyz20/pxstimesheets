import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Router } from '@angular/router';
import { MenuBottomSheetComponent } from 'src/app/bottomsheets/menu-bottom-sheet/menu-bottom-sheet.component';
import { SharedService } from 'src/app/services/shared.service';
import { btnAnm } from '../../animations/animations';
import { homeMenuItems, languages, userMenu } from '../../shared/homeMenuItems';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [btnAnm]
})
export class HeaderComponent implements OnInit {

  _userMenu = userMenu;
  enableSpinner: boolean;
  _languages = languages;
  menuItems = homeMenuItems;
  screenTitle: string = '';
  perId: string = 'idxxxxxx';
  userProfile: string = 'Admin';
  env: string = 'Prod';
  title: string = 'Timesheet Registration';

  buttons = [
    {
      icon: 'email'
    },
    {
      icon: 'bookmark'
    },
    {
      icon: 'print'
    }
  ];

  constructor(private sharedService: SharedService, private router: Router, private _bottomsheet: MatBottomSheet,
    private cookieService: CookieService) { }

  ngOnInit() {
    // this.sharedService.title.subscribe(title => this.screenTitle = title);
    this.sharedService.spinnerState.subscribe(spinnerState => this.enableSpinner = spinnerState);
    this.env = environment.name; //Accessing environment specific variables

    //To get the perId & profile from cookies
    // if (this.cookieService.get('Userid') !== null && this.cookieService.get('Userid') !== '') {
    //   this.perId = this.cookieService.get('Userid').replace(new RegExp('"', 'g'), '');
    // }
    // if (this.cookieService.get('Usergroups') !== null && this.cookieService.get('Usergroups') !== undefined &&
    //   this.cookieService.get('Usergroups') !== '') {
    //   this.userProfile = this.cookieService.get('Usergroups');
    // }
  }

  ngOnDestroy() {
    //Unsubscribe your subscriptions here
  }

  gotoHome() {
    this.sharedService.toggleScreenTitle('');
    this.router.navigate(['/']);
  }

  openMenu() {
    this.sharedService.toggleSideNav();
  }

}
