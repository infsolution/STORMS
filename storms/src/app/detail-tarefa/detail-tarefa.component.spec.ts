import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTarefaComponent } from './detail-tarefa.component';

describe('DetailTarefaComponent', () => {
  let component: DetailTarefaComponent;
  let fixture: ComponentFixture<DetailTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
