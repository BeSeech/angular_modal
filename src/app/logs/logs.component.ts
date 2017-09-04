import {Component, ElementRef, OnInit, ViewChild, Input, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LogStore} from './redux/store';
import {LogState} from './redux/state';
import * as Redux from 'redux';
import {ActionFacility} from './redux/action';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})

export class LogsComponent implements OnInit {

  @Input() public buffer = 500;
  @ViewChild('inputField') private inputField: ElementRef;
  private keyUpObservable: any;

  constructor(@Inject(LogStore) private store: Redux.Store<LogState>) {
  }

  ngOnInit() {
    this.store.dispatch(ActionFacility.ClearLog());
    this.store.dispatch(ActionFacility.SetBufferSize(this.buffer));
    this.keyUpObservable = Observable.fromEvent(this.inputField.nativeElement, 'keyup')
      .map(() => this.inputField.nativeElement.value)
      .debounceTime(250).distinctUntilChanged();
    this.keyUpObservable.subscribe(s => this.filter(s));
  }

  clear(): void {
    this.store.dispatch(ActionFacility.ClearLog());
  }

  filter(value: string): void {
    this.store.dispatch(ActionFacility.SetFilter(value));
  }
}
