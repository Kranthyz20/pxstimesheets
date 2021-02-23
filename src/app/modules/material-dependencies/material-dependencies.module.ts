import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule, MatBottomSheetModule, MatButtonModule, MatCardModule, MatCheckboxModule,
  MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSnackBarModule,
  MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule,
  MatSlideToggleModule, MatDividerModule, MatMenuModule, MatChipsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatToolbarModule, MatProgressBarModule, MatSidenavModule, MatCheckboxModule, MatListModule,
    MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatTooltipModule,
    MatInputModule, MatRippleModule, MatDialogModule, MatSnackBarModule, MatTabsModule, MatSelectModule,
    MatCardModule, MatExpansionModule, MatGridListModule, MatStepperModule, MatProgressSpinnerModule,
    MatBottomSheetModule, MatAutocompleteModule, MatRadioModule, MatIconModule, MatDatepickerModule,
    MatNativeDateModule, MatSlideToggleModule, MatDividerModule, MatMenuModule, MatChipsModule
  ],
  exports: [MatToolbarModule, MatProgressBarModule, MatSidenavModule, MatCheckboxModule, MatListModule,
    MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatTooltipModule,
    MatInputModule, MatRippleModule, MatDialogModule, MatSnackBarModule, MatTabsModule, MatSelectModule,
    MatCardModule, MatExpansionModule, MatGridListModule, MatStepperModule, MatProgressSpinnerModule,
    MatBottomSheetModule, MatAutocompleteModule, MatRadioModule, MatIconModule, MatDatepickerModule,
    MatNativeDateModule, MatSlideToggleModule, MatDividerModule, MatMenuModule, MatChipsModule]
})
export class MaterialDependenciesModule { }
