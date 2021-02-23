import { Component, OnInit } from '@angular/core';
import { speedDialFabAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-fab-menu',
  templateUrl: './fab-menu.component.html',
  styleUrls: ['./fab-menu.component.scss'],
  animations: [speedDialFabAnimations]
})
export class FabMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fabButtons = [
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
  buttons = [];
  fabTogglerState = 'inactive';

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

}
