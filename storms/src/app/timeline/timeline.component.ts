import { Component, OnInit } from '@angular/core';
import { MEMBERS } from '../mock-member'; 
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  members = MEMBERS;
  constructor() { }

  ngOnInit() {
  }

}
