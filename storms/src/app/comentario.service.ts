import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comentario } from './comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor() { }

  getComentarios(): Observable<Comentario[]>{
    return of();
  }

  getComentario(id: number): Observable<Comentario>{
    return of();
  }
}
