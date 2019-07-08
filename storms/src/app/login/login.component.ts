import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
  isSubmitted  =  false;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
  	this.loginForm = this.formBuilder.group({
  		username: ['', Validators.required],
  		password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }
  loginII(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    //this.authService.login(this.loginForm.value);
    //this.router.navigateByUrl('/timeline');
  }
   login(form){
    console.log(form.value);
    this.authService.singIn(form.value).subscribe((res)=>{
      console.log("Logged in!");
      this.router.navigateByUrl('home');
    });    
  }
}
