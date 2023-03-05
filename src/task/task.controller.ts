import { 
    Controller, 
    Get, 
    Post, 
    Put, 
    Delete, 
    Param,
    Body, 
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get() findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Post() create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  @Put(':id') edit(@Param('id') _id: number, @Body() task: Task): Promise<Task> {
    return this.taskService.edit(_id, task);
  }

  @Delete(':id') removeById(@Param('id') _id: number): Promise<void> {
    return this.taskService.removeById(_id);
  }

  @Get(':id') findById(@Param('id') _id: number): Promise<Task[]> {
    return this.taskService.findById(_id);
  }
}
