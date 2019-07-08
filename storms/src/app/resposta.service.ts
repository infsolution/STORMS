import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resposta } from './resposta';

@Injectable({
  providedIn: 'root'
})
export class RespostaService {

  constructor() { }

  getRespostas(): Observable<Resposta[]>{
    return of();
  }

  getResposta(id: number): Observable<Resposta>{
    return of();
  }
}
