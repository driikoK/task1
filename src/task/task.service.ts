import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { Logger } from '@nestjs/common';

@Injectable()
export class TaskService {

 constructor(
   @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async create(task: Task): Promise<Task> {
    return await this.taskRepository.save(task);
  }

  async edit(_id: number, task: Task): Promise<Task | any> {
    await this.taskRepository.update(_id, task);
  }

  async removeById(_id: number): Promise<any> {
    await this.taskRepository.delete(_id);
  }
  async findById(_id: number): Promise<Task[]> {
    return await this.taskRepository.findByIds([_id]);
}
}
