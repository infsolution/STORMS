import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brainstorming',
  templateUrl: './brainstorming.component.html',
  styleUrls: ['./brainstorming.component.css']
})
export class BrainstormingComponent implements OnInit {
	criar=false;
	participar=true;
	finished=false;
  constructor() { }

  ngOnInit() {
  }

}
