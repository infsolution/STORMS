import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {TimelineComponent} from './timeline/timeline.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrainstormingComponent } from './brainstorming/brainstorming.component';
import { ChartComponent } from './chart/chart.component';
import { DetailTarefaComponent } from './detail-tarefa/detail-tarefa.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthGuard } from './auth.guard';

const routes: Routes =[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'members', component: TableComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'brainstorming', component: BrainstormingComponent },
  { path: 'chart', component: ChartComponent }, 
  { path: 'detail/:id', component: DetailTarefaComponent },
  { path: 'projeto', component: ProjectsComponent },
  { path: 'timeline', component: TimelineComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
