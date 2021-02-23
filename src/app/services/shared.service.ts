import { Injectable } from '@angular/core';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sideNav: MatSidenav;

  private screenTitle = new BehaviorSubject('');
  title = this.screenTitle.asObservable();

  private spinner = new BehaviorSubject(false);
  spinnerState = this.spinner.asObservable();

  constructor(private snackbar: MatSnackBar) { }

  toggleScreenTitle(state: string) {
    this.screenTitle.next(state);
  }

  toggleSpinnerState(state: boolean) {
    this.spinner.next(state);
  }

  toggleSideNav() {
    this.sideNav.toggle();
  }

  setSideNav(_sidenav: MatSidenav) {
    this.sideNav = _sidenav;
  }

  openSnackbar(val: string) {
    let result = 'Timesheets ' + val + ' successfully';
    this.snackbar.open(result, '', {
      duration : 2000
    });
  }
}
