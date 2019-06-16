import { Activity } from './activity';
export class Task{
    id: number;
    desc: string;
    deadline: string;
    percent: number;
    activitys: Activity[];
}