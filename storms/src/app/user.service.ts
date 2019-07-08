import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of  } from 'rxjs';
import { MessageService } from './message.service';

const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private memberUrl = 'storms.infsolution.com.br/api/user/';
  //private memberUrlCreat = 'http://localhost:8000/api/user-create/';
  private memberUrlCreat = 'http://storms.infsolution.com.br/api/user-create/';
  constructor(private http: HttpClient, private messageService: MessageService) { }
  getMembers():Observable<User[]>{
    return this.http.get<User[]>(this.memberUrl).pipe(tap(_=> this.log('usuários')),
      catchError(this.handleError <User[]>('getMembers',[])));
  }
  getMember(id: number): Observable<User>{
    const url = `${this.memberUrl}/${id}`;
    return this.http.get<User>(url).pipe(tap(_=>this.log(`usuario id ${id}`)), 
    catchError(this.handleError<User>(`getMember id=${id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`MemberService: ${message}`);
  }

  updateMember(member: User): Observable<any>{
    return this.http.put(this.memberUrl, member, httpOptions).pipe(tap(_=>this.log(`update member id=${member.id}`)),
    catchError(this.handleError<any>(`updateMember`))
    );
    
  }

  addMember(user: User): Observable<User>{
    return this.http.post(this.memberUrlCreat, user, httpOptions).pipe(
      tap((newUser: User)=>this.log(`Criado o usuario id=${newUser.id}`)),
      catchError(this.handleError<User>(`Criar usuário`))
      );
  }

  deleteMember(user: User| number): Observable<User>{
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.memberUrl}/${id}`;
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_=>this.log(`usuário id=${id} foi excluído`)),
      catchError(this.handleError<User>(`deleteMember`))
    );
  }

  searchMember(term: string): Observable<User[]>{
    if(term.trim()){
      return of([]);
    }
    return this.http.get<User[]>(`${this.memberUrl}/?username=${term}`).pipe(
      tap(_=>this.log('Usuários encontrados com "${term}"')),
      catchError(this.handleError<User[]>(`searchMember`))
    );
  }
}
