import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssueService } from './issues.service';
import { DataService } from './data.service';
import { PropsExtendedService } from './props-extended.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    IssueService,
    PropsExtendedService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
