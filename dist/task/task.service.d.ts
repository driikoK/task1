import { Repository } from 'typeorm';
import { Task } from './task.entity';
export declare class TaskService {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    findAll(): Promise<Task[]>;
    create(task: Task): Promise<Task>;
    edit(_id: number, task: Task): Promise<Task | any>;
    removeById(_id: number): Promise<any>;
    findById(_id: number): Promise<Task[]>;
}
