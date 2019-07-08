import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Member } from './member';
import { Observable, of  } from 'rxjs';
import { MessageService } from './message.service';


const httpOptions = {headers: new HttpHeaders({'Content-Type':'application-json'})};
@Injectable({
  providedIn: 'root'
})
export class MemberService {
 
  private memberUrl = 'storms.infsolution.com.br/api/user/';
  private memberUrlCreat = 'http://localhost:8000/api/user-create/';
  
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getMembers():Observable<Member[]>{
    return this.http.get<Member[]>(this.memberUrl).pipe(tap(_=> this.log('usuários')),
      catchError(this.handleError <Member[]>('getMembers',[])));
  }
  getMember(id: number): Observable<Member>{
    const url = `${this.memberUrl}/${id}`;
    return this.http.get<Member>(url).pipe(tap(_=>this.log(`usuario id ${id}`)), 
    catchError(this.handleError<Member>(`getMember id=${id}`)));
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

  updateMember(member: Member): Observable<any>{
    return this.http.put(this.memberUrl, member, httpOptions).pipe(tap(_=>this.log(`update member id=${member.id}`)),
    catchError(this.handleError<any>(`updateMember`))
    );
    
  }

  addMember(member: Member): Observable<Member>{
    return this.http.post(this.memberUrlCreat, member, httpOptions).pipe(
      tap((newMember: Member)=>this.log(`Criado o usuario id=${newMember.id}`)),
      catchError(this.handleError<Member>(`Criar usuário`))
      );
  }

  deleteMember(member: Member| number): Observable<Member>{
    const id = typeof member === 'number' ? member : member.id;
    const url = `${this.memberUrl}/${id}`;
    return this.http.delete<Member>(url, httpOptions).pipe(
      tap(_=>this.log(`usuário id=${id} foi excluído`)),
      catchError(this.handleError<Member>(`deleteMember`))
    );
  }

  searchMember(term: string): Observable<Member[]>{
    if(term.trim()){
      return of([]);
    }
    return this.http.get<Member[]>(`${this.memberUrl}/?username=${term}`).pipe(
      tap(_=>this.log('Usuários encontrados com "${term}"')),
      catchError(this.handleError<Member[]>(`searchMember`))
    );
  }
  
  
}
