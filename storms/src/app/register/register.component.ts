import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }
 
  ngOnInit() {
  }

  add(username: string, email: string, password: string): void{
    username = username.trim();
    email = email.trim();
    password = password.trim();
    if(!username || !email || !password){
      return;
    }
    this.userService.addMember({username, email, password} as User).subscribe(user=>{this.users.push(user)});
  }
}
