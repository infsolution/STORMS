import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { createCustomElement } from '@angular/elements';
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
    CronometroComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatSidenavModule
  ],
  //entryComponents: [ChatComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]

})
export class AppModule { 
  /*constructor(injector: Injector){
    const custom = createCustomElement(ChatComponent,{injector: injector});
    customElements.define('app-chat', custom);
  }*/
}
