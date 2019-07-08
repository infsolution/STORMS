import { Member } from './member';
import { Atributo } from './atributo';
import { Comentario } from './comentario';

export class Scopo {
    owner: Member;
    descricao: string;
    andamento: number;
    atributos: Atributo[];
    comentarios: Comentario[];
}
