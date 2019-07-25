import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-component',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() position: any;
  constructor() { }

  ngOnInit() {
  }

}
