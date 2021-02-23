import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { homeMenuItems } from '../../shared/homeMenuItems';

@Component({
  selector: 'app-menu-bottom-sheet',
  templateUrl: './menu-bottom-sheet.component.html',
  styleUrls: ['./menu-bottom-sheet.component.scss']
})
export class MenuBottomSheetComponent implements OnInit {

  menuItems = homeMenuItems;
  constructor(private _bottomSheetRef: MatBottomSheetRef<MenuBottomSheetComponent>) { }

  ngOnInit() {
  }

  close(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
  }
}
