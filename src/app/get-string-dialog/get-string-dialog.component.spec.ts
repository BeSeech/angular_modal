import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStringDialogComponent } from './get-string-dialog.component';

describe('GetStringDialogComponent', () => {
  let component: GetStringDialogComponent;
  let fixture: ComponentFixture<GetStringDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStringDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStringDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
