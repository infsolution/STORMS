import { Injectable } from '@angular/core';
import { User } from  './user';
import { JwtResponse } from  './jwt-response';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER = "http://storms.infsolution.com.br";
  authSubject  =  new  BehaviorSubject(false);
  constructor(private httpClient: HttpClient) { }

static getToken(): string {
    return localStorage.getItem('ACCESS_TOKEN');
  }

public login(userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  
public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
  /*singIn(user: User): Observable<JwtResponse>{
    return this.httpClient.post(`${this.AUTH_SERVER}/api-token-auth/`, user).pipe(
      tap(async(res: JwtResponse)=>{
        if (res.user){
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
          localStorage.setItem("EXPIRES_IN", ""+res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }

  signOut() {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    this.authSubject.next(false);
  }
  isAuthenticated() {
    return  this.authSubject.asObservable();
  }*/

}
