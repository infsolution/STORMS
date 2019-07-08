import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Scopo } from './scopo';
@Injectable({
  providedIn: 'root'
})
export class ScopoService {

  constructor() { }
  getScopos(): Observable<Scopo[]>{
    return of();
  }

  getScopo(id: number): Observable<Scopo>{
    return of();
  }
}
