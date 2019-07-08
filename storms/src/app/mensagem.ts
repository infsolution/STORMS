import { Member } from './member';
import { Resposta } from "./resposta";
export class Mensagem {
    owner: Member;
    conteudo: string;
    date_time: string;
    respostas: Resposta[];
}
