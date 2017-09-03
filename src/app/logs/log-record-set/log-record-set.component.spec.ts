import {LogRecordSetComponent} from './log-record-set.component';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ActionFacility} from "../redux/action";
import {LogColor, LogItem} from "../redux/logItemModel";

describe( 'filtering', () => {
  const logComponent: ComponentFixture<LogRecordSetComponent> = TestBed.createComponent(LogRecordSetComponent);
  const store = logComponent.componentInstance.store;
  const state = logComponent.componentInstance.store.getState();
  it ('Show all log records', () => {
    store.dispatch(ActionFacility.AddLogItem(new LogItem('test1', LogColor.blue, false)));
    store.dispatch(ActionFacility.AddLogItem(new LogItem('test2', LogColor.blue, false)));
    store.dispatch(ActionFacility.AddLogItem(new LogItem('test3', LogColor.blue, false)));
    logComponent.nativeElement.querySelectorAll('.item');

  });


});
