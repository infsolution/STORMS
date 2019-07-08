import { Member } from './member';
import { Mensagem } from './mensagem';
export class Projeto{
    id: number;
    owner: string;
    nome: string;
    data_inicio: string;
    previsao_entrega: string;
    data_contrato: string;
    colaboradores: Member[];
    date_time: string;
    interessado: string;
    chat: Mensagem[];
}