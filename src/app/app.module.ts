import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { CookieService } from 'ngx-cookie-service';
import { ResponsiveModule } from 'ngx-responsive';
import { AppComponent } from './app.component';
import { MenuBottomSheetComponent } from './bottomsheets/menu-bottom-sheet/menu-bottom-sheet.component';
import { ApproverComponent } from './components/approver/approver.component';
import { FabMenuComponent } from './components/fab-menu/fab-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { StartUpComponent } from './components/start-up/start-up.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { ToBeDeletedComponent } from './components/to-be-deleted/to-be-deleted.component';
import { ToBeDeletedDialogComponent } from './dialogs/to-be-deleted-dialog/to-be-deleted-dialog.component';
import { MaterialDependenciesModule } from './modules/material-dependencies/material-dependencies.module';
import { AppRoutingModule } from './modules/routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToBeDeletedComponent,
    ToBeDeletedDialogComponent,
    MenuBottomSheetComponent,
    StartUpComponent,
    HeaderComponent,
    FooterComponent,
    TimesheetComponent,
    FabMenuComponent,
    ApproverComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDependenciesModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ResponsiveModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [ToBeDeletedDialogComponent, MenuBottomSheetComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
}
