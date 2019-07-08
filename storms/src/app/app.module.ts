import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { createCustomElement } from '@angular/elements';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import { TableComponent } from './table/table.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SidenaveComponent } from './sidenave/sidenave.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailTarefaComponent } from './detail-tarefa/detail-tarefa.component';
import { BrainstormingComponent } from './brainstorming/brainstorming.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { MessageComponent } from './message/message.component';
import { MemberComponent } from './member/member.component';
import { MemberService } from './member.service';
import {  
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
MatToolbarModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    TableComponent,
    TimelineComponent,
    SidenaveComponent,
    CalendarComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    DetailTarefaComponent,
    BrainstormingComponent,
    CronometroComponent,
    ChartComponent,
    MessageComponent,
    MemberComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    ChartsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
MatToolbarModule,
LayoutModule
  ],
  //entryComponents: [ChatComponent],
  providers: [MemberService],
  bootstrap: [AppComponent],
  exports: [AppComponent]

})
export class AppModule { 
  /*constructor(injector: Injector){
    const custom = createCustomElement(ChatComponent,{injector: injector});
    customElements.define('app-chat', custom);
  }*/
}
