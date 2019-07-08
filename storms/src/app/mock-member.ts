import { Member} from './member';
import { Task } from './task';

const TASKS: Task[]=[
  {id:1, desc:'Criar classes de modelo', deadline:'21/07/2019', percent:50, activitys:[{id:1,desc:'especificar classes',date:'10/06/2019 16:21:18'}]},
  {id:2, desc:'Modelar e criar Base de dados', deadline:'21/07/2019', percent:43, activitys:[{id:2,desc:'Modelo de dados',date:'12/06/2019 10:19:26'}]},
  {id:3, desc:'Criar Interface', deadline:'21/07/2019', percent:18,activitys:[{id:3,desc:'Criar template ',date:'13/06/2019 17:45:19'}]},
  {id:4, desc:'Criar lógica de negócio', deadline:'21/07/2019', percent:69, activitys:[{id:1,desc:'Cria metodo de login',date:'15/06/2019 19:15:15'}]}
]
