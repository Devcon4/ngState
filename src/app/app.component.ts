import { Component, OnInit } from '@angular/core';
import { IssueService } from './issues.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.issueService.readAll();
  }

  constructor(public issueService: IssueService) { }
}
