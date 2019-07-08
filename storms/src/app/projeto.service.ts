import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Projeto } from './projeto';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const projetoList = 'http://storms.infsolution.com.br/api/projeto/';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {


  constructor(private http: HttpClient) { }

  getProjetos(): Observable<Projeto[]>{
    return this.http.get<Projeto[]>(projetoList)
      .pipe(
        tap(produtos => console.log('recebeu os projetos')),
        catchError(this.handleError('getProjetos', []))
);
  }

  getProjeto(id: number): Observable<Projeto>{
    const url = `${projetoList}/${id}`;
    return this.http.get<Projeto>(url).pipe(
      tap(_ => console.log(`leu o projeto id=${id}`)),
      catchError(this.handleError<Projeto>(`getProjeto id=${id}`))
);
  }
  addProjeto (projeto): Observable<Projeto> {
    return this.http.post<Projeto>(projetoList, projeto, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((projeto: Projeto) => console.log(`adicionou o produto com w/ id=${projeto.id}`)),
      catchError(this.handleError<Projeto>('addProjeto'))
    );
  }

  updateProjeto(id, projeto): Observable<any> {
    const url = `${projetoList}/${id}`;
    return this.http.put(url, projeto, httpOptions).pipe(
      tap(_ => console.log(`atualiza o PROJETO com id=${id}`)),
      catchError(this.handleError<any>('updateProjeto'))
    );
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
}
}
