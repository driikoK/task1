import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TaskController } from './task/task.controller';
import { AppService } from './app.service';
import { TaskService } from './task/task.service';
import { Task } from './task/task.entity';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
   TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017',
      database: 'task',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      ssl: false,
      useUnifiedTopology: true,
      useNewUrlParser: true
    }),
    TypeOrmModule.forFeature([Task])
  ],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
