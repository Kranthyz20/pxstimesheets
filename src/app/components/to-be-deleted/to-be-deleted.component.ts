import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { ToBeDeletedDialogComponent } from 'src/app/dialogs/to-be-deleted-dialog/to-be-deleted-dialog.component';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-to-be-deleted',
  templateUrl: './to-be-deleted.component.html',
  styleUrls: ['./to-be-deleted.component.scss']
})
export class ToBeDeletedComponent implements OnInit {

  @Input() _datasource: any;
  @Input() _displayedColumns: string[] = [];
  @Input() template: any;
  @Input() _caller: string = '';
  selection = new SelectionModel<any>(true, []);

  showSpinner: boolean;
  columnsToDisplay: any;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = [];
  caller: string = '';
  isButtonEnable: boolean = false;

  constructor(public dialog: MatDialog, private sharedService: SharedService, private cd: ChangeDetectorRef) {
    this.sharedService.spinnerState.subscribe(state => this.showSpinner = state);
    this.selection.changed.subscribe(() => {
      this.isButtonEnable = this.selection.selected.length != 0;
    })
  };

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  ngOnInit() {
    this.sharedService.toggleScreenTitle('Timesheet');
    this.dataSource.data = this._datasource;
    this.dataSource.sort = this.sort;
    this.displayedColumns = this._displayedColumns;
    this.columnsToDisplay = this.template;
    this.caller = this._caller;
    //this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    //Unsubscribe from all your observables
  }

  addNew() {
    this.dialog.open(ToBeDeletedDialogComponent, {
      width: '50%'
    });
  }

  onCLick(val: string) {
    this.sharedService.openSnackbar(val);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
