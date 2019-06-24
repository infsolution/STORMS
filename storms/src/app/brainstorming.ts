import { Ideia } from './ideia';
export class Brainstorming {
	id: number;
	assunto: string;
	date: string;
	horaInicio: string;
	horaFim: string;
	indeias: Ideia[];
}