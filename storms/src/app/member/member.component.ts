import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  @Input() member: Member;
  constructor() { }

  ngOnInit() {
  }

  /*save(): void{
    this.memberService.updateMember(this.member).subscrib(()=>this.goBack());
  }*/
}
