import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto.service';
import { Projeto } from '../projeto';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private projetoService: ProjetoService) { }
  	displayedColumns: string[] = [ 'owner', 'nome', 'data_inicio', 'previsao_entrega', 'data_contrato', 'date_time', 'interessado'];
	dataSource: Projeto[];
  ngOnInit() {
  	 this.projetoService.getProjetos()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      //this.isLoadingResults = false;
    }, err => {
      console.log(err);
      //this.isLoadingResults = false;
});
  }

}
