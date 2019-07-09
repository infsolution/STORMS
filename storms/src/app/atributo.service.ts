import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Atributo } from './atributo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'token 975dac396660d4faf1b40380473ede40ca8f1921'
})
};

@Injectable({
  providedIn: 'root'
})


export class AtributoService {
 private atributoUrl = 'http://storms.infsolution.com.br/api/atributo/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

    ngOnInit(): void {
    this.getAtributos();
  	}

  getAtributos(): Observable<Atributo[]>{
    return this.http.get<Atributo[]>(this.atributoUrl, httpOptions).pipe(
    	 tap(_ => this.log('fetched atributos')),
      catchError(this.handleError<Atributo[]>('getAtributos', []))
      );
  }

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
	console.error(error);
	this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
getAtributo(id: number): Observable<Atributo> {
  const url = `${this.atributoUrl}/${id}`;
  return this.http.get<Atributo>(url).pipe(
    tap(_ => this.log(`Atributo:  id=${id}`)),
    catchError(this.handleError<Atributo>(`getAtributo id=${id}`))
  );
}


private log(message: string) {
  this.messageService.add(`AtributoService: ${message}`);
}
}
