import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { btnAnm, listAnimation } from 'src/app/animations/animations';
import { datasource, SampleTemplate, timesheetsMock, SampleColumnsToBeDisplayed } from 'src/app/shared/toBeDeletedFile';
// import {  MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
  animations: [btnAnm, listAnimation]
})
export class TimesheetComponent implements OnInit {

  openAdminPanel: boolean = true;
  openDetailsPanel: boolean = false;
  columnsToDisplay = SampleTemplate;
  _datasource = datasource;
  screenWidth: number = 0;
  timesheetsMock = timesheetsMock;
  timesheetsDisplayedColumns: string[] = SampleColumnsToBeDisplayed;
  caller : string = 'Timesheet';

   @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }

  constructor(private sharedService: SharedService) { }

  selected = '11.08.2020-16.08.2020-202034-Saved';
  showTimesheet: boolean = false;

  ngOnInit() {
    this.sharedService.toggleScreenTitle('Timesheet');
  }


  missingTimesheets = ['201850', '201851(1)', '201852', '201901(1)', '201901(2)'];

  timesheetHistory = ['07.12.2020-13.12.2020-202050-Initialized', '01.12.2020-06.12.2020-202049-Initialized',
    '17.08.2020-23.08.2020-202035-Saved', '11.08.2020-16.08.2020-202034-Saved', '04.08.2020-10.08.2020-202034-Initialized',
    '17.08.2020-23.08.2020-202035-Saved', '11.08.2020-16.08.2020-202034-Saved', '04.08.2020-10.08.2020-202034-Initialized',
    '17.08.2020-23.08.2020-202035-Saved', '11.08.2020-16.08.2020-202034-Saved', '04.08.2020-10.08.2020-202034-Initialized'];

  onSearch() {
    this.sharedService.toggleSpinnerState(true);
    setTimeout(() => {
      this.showTimesheet = true;
      this.openAdminPanel = false;
      this.openDetailsPanel = true;
      this.sharedService.toggleSpinnerState(false);
    }, 2000);

  }

  onCLick(val: string) {
    this.sharedService.openSnackbar(val);
  }
}
