import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PopupModule } from './ng2-opd-popup';
import {LogsModule} from './logs/logs.module';
import { GetStringDialogComponent } from './get-string-dialog/get-string-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GetStringDialogComponent
  ],
  imports: [
    BrowserModule,
    PopupModule.forRoot(),
    LogsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
