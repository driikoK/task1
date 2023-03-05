import { TaskService } from './task.service';
import { Task } from './task.entity';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    findAll(): Promise<Task[]>;
    create(task: Task): Promise<Task>;
    edit(_id: number, task: Task): Promise<Task>;
    removeById(_id: number): Promise<void>;
    findById(_id: number): Promise<Task[]>;
}
