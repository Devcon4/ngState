import { Component, OnInit } from '@angular/core';
import { IssueService } from './issues.service';
import { PropService } from './props.service';
import { BaseService } from "./ngState";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.issueService.readAll();
    this.propService.read(1);
  }

  constructor(public issueService: IssueService, public propService: PropService) { }
}

class FormModel {}

export class MyForm extends BaseService<FormModel> {

}
