import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Forum } from './forum';
@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor() { }

  getForums(): Observable<Forum[]>{
    return of();
  }

  getForum(id: number): Observable<Forum>{
    return of();
  }
}
