import { Manager } from './manager';
import { Member } from './member';
export class Project{
    id: number;
    descriptio: string;
    manager: Manager;
    members: Member[];
    data_init: string;
    data_end: string;
}