import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { MongodbModule } from '../../../database/mongodb/mongodb.module';
import { todosProviders } from './schemas/todos.providers';
import { BullModule } from '@nestjs/bull';
import { TodosConsumer } from './consumers/todos.consumer';

@Module({
  imports: [
    MongodbModule,
    BullModule.registerQueue({
      name: 'todo-created',
    }),
    TodosConsumer,
  ],
  controllers: [TodosController],
  providers: [...todosProviders, TodosService],
})
export class TodosModule {}
