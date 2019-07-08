import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Projeto } from './projeto';
@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  constructor() { }

  getProjetos(): Observable<Projeto[]>{
    return of();
  }

  getProjeto(id: number): Observable<Projeto>{
    return of();
  }
}
