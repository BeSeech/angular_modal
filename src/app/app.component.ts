import {Component, ViewChild} from '@angular/core';
import {Popup} from './ng2-opd-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('p1') p1: Popup;

  bClick() {
    this.p1.show();
  }
}

