import {
  Processor,
  Process,
  InjectQueue,
  OnQueueFailed,
  OnQueueCompleted,
} from '@nestjs/bull';
import { LoggerService } from 'hcp-bpcp-module-common';
import { Job, Queue } from 'bull';
import { Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Todo } from '../todos.interface';

@Processor('todo-created')
export class TodosConsumer {
  private readonly logger = new LoggerService(TodosConsumer);

  constructor(
    @Inject('TODO_MODEL')
    private todoModel: Model<Todo>,

    @InjectQueue('todo-created')
    private todoQueue: Queue,
  ) {}

  @Process('transcode')
  async handleTranscode(job: Job) {
    this.logger.log(JSON.stringify(job.data));
    this.logger.log('Transcoding completed,,');
    return {};
  }

  @Process('temporary')
  async handleTemporary(job: Job) {
    await this.todoModel.create(job.data.todo);
  }

  @OnQueueFailed()
  async onQueueFailed(job: Job, result: any) {
    const msg = `(Queue) on Error: job ${job.id} -> result: ` + result;
    this.logger.error(msg);
  }

  @OnQueueCompleted()
  async onQueueCompleted(job: Job, result: any) {
    this.logger.log(JSON.stringify(job.data));
    const msg = `(Queue) on Completed: job ${job.id} -> result: ` + result;
    this.logger.log(msg);
  }
}
