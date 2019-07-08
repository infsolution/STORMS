import { Member } from './member';
import { Forumresposta } from './forumresposta';

export class Forum {
    owner: Member;
    titulo: string;
    descricao: string;
    date_time: string;
    aberto: boolean;
    respostas: Forumresposta[];

}
