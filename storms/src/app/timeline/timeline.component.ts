import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Atributo } from '../atributo';
import { AtributoService } from '../atributo.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
   atributos: Atributo[];
  constructor(private atributoService: AtributoService) { }

  ngOnInit() {
    this.getAtributos();
  }

  getAtributos(): void{
    this.atributoService.getAtributos().subscribe(atributos => this.atributos = atributos);
  }

}
