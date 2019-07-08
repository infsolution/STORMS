import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Atributo } from './atributo';
@Injectable({
  providedIn: 'root'
})
export class AtributoService {

  constructor() { }
  getAtributos(): Observable<Atributo[]>{
    return of();
  }

  getAtributo(id: number): Observable<Atributo>{
    return of();
  }
}
