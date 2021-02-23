import { Routes } from '@angular/router';
import { ApproverComponent } from 'src/app/components/approver/approver.component';
import { ReportsComponent } from 'src/app/components/reports/reports.component';
import { StartUpComponent } from 'src/app/components/start-up/start-up.component';
import { TimesheetComponent } from 'src/app/components/timesheet/timesheet.component';
import { ToBeDeletedComponent } from 'src/app/components/to-be-deleted/to-be-deleted.component';

//Add custom routes here
export const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' }, //Redirect to Home screen when no path is given
    { path: 'Home', component: StartUpComponent },
    { path: 'Timesheet', component: TimesheetComponent },
    { path: 'Table', component: ToBeDeletedComponent },
    { path: 'Approver', component: ApproverComponent },
    { path: 'Reports', component: ReportsComponent }
]; 