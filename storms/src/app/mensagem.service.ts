import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mensagem } from './mensagem';
@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor() { }

  getMensagems(): Observable<Mensagem[]>{
    return of();
  }

  getMensagem(id: number): Observable<Mensagem>{
    return of();
  }
}
