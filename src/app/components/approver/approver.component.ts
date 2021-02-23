import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ApproverColumnsToBeDisplayed, ApproverDatasource, ApproverTemplate, timesheetsMock } from 'src/app/shared/toBeDeletedFile';
import { SharedService } from 'src/app/services/shared.service';
import { listAnimation, btnAnm } from 'src/app/animations/animations';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.scss'],
  animations: [btnAnm, listAnimation]
})
export class ApproverComponent implements OnInit {

  columnsToDisplay = ApproverTemplate;
  screenWidth: number = 0;
  timesheetsMock = timesheetsMock;
  displayedColumns = ApproverColumnsToBeDisplayed;
  datasource = ApproverDatasource;
  caller: string = 'Approver';
  isLoading: boolean = false;
  selectedDate: any;
  showDetailsTable: boolean = false;
  noApprovals: boolean = false;
  selection = new SelectionModel<any>(true, []);
  isButtonEnable: boolean = false;
  approvalDates: number[] = [5, 8, 10, 11, 15];
  @ViewChild('myCalendar', {static : false}) myCalendar;

  dateClass = (cellDate, view) => {
    const date = cellDate.getDate();
    const month = cellDate.getMonth() + 1; //i.e. Feb Month
    return (month === 2 && this.approvalDates.includes(date)) ? 'custom-date-class' : '';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }


  constructor(private sharedService: SharedService) {
    this.selection.changed.subscribe(() => {
      this.isButtonEnable = this.selection.selected.length != 0;
    })
  }

  ngOnInit() {
  }

  dateClick(event: any) {
    this.noApprovals = false;
    this.selectedDate = event;
    const d = new Date(event);
    let selectedDate = d.getDate();
    let arr = [5, 8, 10, 11, 15];
    this.isLoading = true;
    this.sharedService.toggleSpinnerState(true);
    setTimeout(() => {
      this.isLoading = false;
      if (arr.includes(selectedDate) == true) {
        this.noApprovals = false;
        this.showDetailsTable = true;
      }
      else {
        this.noApprovals = true;
        this.showDetailsTable = false;
      }
      this.sharedService.toggleSpinnerState(false);
    }, 2000);
  }

  onClick(val: string) {
    const d = new Date(this.selectedDate);
    let selectedDate = d.getDate();

    const index = this.approvalDates.indexOf(selectedDate, 0);
    if (index > -1) {
      this.approvalDates.splice(index, 1);
    }
    
    console.log(this.myCalendar);
    this.sharedService.openSnackbar(val);
  }


}
