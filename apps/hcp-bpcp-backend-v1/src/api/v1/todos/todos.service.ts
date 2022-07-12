import { InjectQueue } from '@nestjs/bull';
import { Injectable, Inject } from '@nestjs/common';
import { Queue } from 'bull';
import { Model } from 'mongoose';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todos.interface';

@Injectable()
export class TodosService {
  constructor(
    @Inject('TODO_MODEL')
    private todoModel: Model<Todo>,

    @InjectQueue('todo-created')
    private todoQueue: Queue,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const res = await this.todoModel.create(createTodoDto);
    console.log('Add queue,,');
    await this.todoQueue.add('transcode', {
      todo: res,
    });
    return res;
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(todoid: number): Promise<Todo> {
    return this.todoModel.findOne({ todoid }).exec();
  }

  async update(todoid: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoModel.findOneAndUpdate({ todoid }, updateTodoDto, {
      new: true,
    });
  }

  async remove(todoid: number) {
    return await this.todoModel.findOneAndRemove({ todoid }).exec();
  }
}
