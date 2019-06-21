import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-member';
import { Observable, of  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  getMembers():Observable<Member[]>{
    return of(MEMBERS);
  }
}
