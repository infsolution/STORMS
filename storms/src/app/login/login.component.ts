import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	//loginForm: FormGroup;
  constructor() { 

  }

  ngOnInit() {
  	/*this.loginForm = this.formBuilder.group({
  		username: ['', Validators.required],
  		password: ['', Validators.required]
  	});*/

  }

}
