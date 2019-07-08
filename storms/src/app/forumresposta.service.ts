import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Forumresposta } from './forumresposta';
@Injectable({
  providedIn: 'root'
})
export class ForumrespostaService {

  constructor() { }

  getForumrespostas(): Observable<Forumresposta[]>{
    return of();
  }

  getForumresposta(id: number): Observable<Forumresposta>{
    return of();
  }
}
