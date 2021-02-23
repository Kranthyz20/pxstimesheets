import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { btnAnm, listAnimation } from 'src/app/animations/animations';
import { ReportTemplate, ReportColumnsToBeDisplayed, ReportDatasource, ReportTemplateForTable, ReportUserDetails } from 'src/app/shared/toBeDeletedFile';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  animations: [btnAnm, listAnimation]
})
export class ReportsComponent implements OnInit {

  reportForm: FormGroup;
  reportTemplate = ReportTemplate;
  currentDate: string = '';
  month: string = '';
  year: number;
  showDetails: boolean = false;
  reportDisplayedColumns: string[] = ReportColumnsToBeDisplayed;
  caller: string = 'Report';
  _datasource = ReportDatasource;
  reportTemplateForTable = ReportTemplateForTable;
  reportUserDetails = ReportUserDetails;
  selectedUserDetails: any[];
  showWarningImg: boolean = false;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    this.createForm();
  }

  ngOnInit() {
    this.currentDate = new Date().toDateString();
  }

  createForm() {
    this.reportForm = this.fb.group({
      perNumber: [],
      month: ['January'],
      year: [2021]
    })
  };

  generateReport() {
    this.selectedUserDetails = [];
    this.showDetails = false;
    this.sharedService.toggleSpinnerState(true);
    this.month = this.reportForm.value['month'];
    this.year = this.reportForm.value['year'];
    let selectedIds: string[] = this.reportForm.value['perNumber'];

    if (selectedIds != null) {
      this.showWarningImg = false;
      if (selectedIds.length == 1) {
        let _user = selectedIds[0].split('-')[0].trim();
        this.reportUserDetails.forEach(user => {
          if (user.perId == _user) {
            this.selectedUserDetails.push(user);
          }
        });
      }
      else {
        this.selectedUserDetails = this.reportUserDetails;
        console.log(this.selectedUserDetails);
      }
    }
    else {
      this.showWarningImg = true;
    }

    setTimeout(() => {
      this.showDetails = true;
      this.sharedService.toggleSpinnerState(false);
    }, 2000);
  }

}
