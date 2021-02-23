import { Component, OnInit } from '@angular/core';
import { footerContent } from '../../shared/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  _footerContent = footerContent;
  
  constructor() { }

  ngOnInit() {
  }

}
