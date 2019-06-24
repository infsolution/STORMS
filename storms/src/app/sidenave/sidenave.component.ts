import { Component, OnInit } from '@angular/core';
//import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenave',
  templateUrl: './sidenave.component.html',
  styleUrls: ['./sidenave.component.css']
})
export class SidenaveComponent implements OnInit {
	
	isShown:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
