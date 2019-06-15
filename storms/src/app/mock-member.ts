import { Member} from './member';
import { Task } from './task';

const TASKS: Task[]=[
  {id:1, desc:'Criar classes de modelo', deadline:'21/07/2019'},
  {id:1, desc:'Modelar e criar Base de dados', deadline:'21/07/2019'},
  {id:1, desc:'Criar Interface', deadline:'21/07/2019'},
  {id:1, desc:'Criar lógica de negócio', deadline:'21/07/2019'}
]
export const  MEMBERS: Member[] = [
    { id: 1, name: 'Paulo', task: TASKS[0]},
    { id: 2, name: 'Joao', task:TASKS[1] },
    { id: 3, name: 'Maria', task:TASKS[2] },
    { id: 4, name: 'Rafaela', task:TASKS[3] }
  ];