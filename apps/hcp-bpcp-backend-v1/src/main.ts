import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import { NestFactory } from '@nestjs/core';
import { Queue } from 'bull';
// import expressBasicAuth from 'express-basic-auth';

import { AppModule } from './app.module';
import { SwaggerService } from 'hcp-bpcp-module-common';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});
  app.setGlobalPrefix('/api/v1');

  // Bull dashboard setup
  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath('/admin/queues');
  const aQueue = app.get<Queue>(`BullQueue_todo-created`);
  createBullBoard({
    queues: [new BullAdapter(aQueue)],
    serverAdapter,
  });
  app.use(
    '/admin/queues',
    // expressBasicAuth({
    //   users: {
    //     admin: 'bpcp_passwd',
    //   },
    //   challenge: true,
    // }),
    serverAdapter.getRouter(),
  );

  // Swagger setup
  new SwaggerService().setupSwagger(app);

  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log('For the Swagger UI, open http://localhost:3000/api-docs/');
  console.log(
    'For the Bull Dashboard UI, open http://localhost:3000/admin/queues/',
  );
}

bootstrap();
