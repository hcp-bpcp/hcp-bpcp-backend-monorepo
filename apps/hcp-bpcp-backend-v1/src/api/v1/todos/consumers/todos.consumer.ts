import { Processor, Process } from '@nestjs/bull';
import { LoggerService } from 'hcp-bpcp-module-common';
import { Job } from 'bull';

@Processor('todo-created')
export class TodosConsumer {
  private readonly logger = new LoggerService(TodosConsumer);

  @Process('transcode')
  async handleTranscode(job: Job) {
    this.logger.warn('Start transcoding,,');
    this.logger.log(JSON.stringify(job.data));
    this.logger.log('Transcoding completed,,');
    return {};
  }
}
