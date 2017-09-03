import {Component, ViewChild} from '@angular/core';
import {Popup} from './ng2-opd-popup';
import {LogsService} from './logs/logs.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('p1') p1: Popup;
  constructor(private log: LogsService) {

  }

  confirm() {
    this.log.success('Confirm');
  }

  cancel() {
    this.log.error('Cancel');
  }

  bClick() {
//    const keyUpObservable = Observable.fromEvent(this.p1, 'confirmClick');
    const options = {
        header: 'Pay attention!',
        color: 'red'
    };
    this.p1.show(options);
    this.log.info('Show dialog');
  }
}

