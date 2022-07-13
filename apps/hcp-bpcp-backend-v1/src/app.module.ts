import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './api/v1/users/users.module';
import { TodosModule } from './api/v1/todos/todos.module';
import { CacheModule } from './api/v1/cache/cache.module';
import { RedisQueueModule } from './database/redis/redis.queue.module';

import { WinstonMiddleware } from 'hcp-bpcp-module-common';
import { LoggerModule } from 'hcp-bpcp-module-common';
import { UsersPrismaModule } from './api/v1/users-prisma/users-prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        'apps/hcp-bpcp-backend-v1/config/' +
        (process.env.NODE_ENV === 'prd'
          ? '.prd.env'
          : process.env.NODE_ENV === 'stg'
          ? '.stg.env'
          : process.env.NODE_ENV === 'dev'
          ? '.dev.env'
          : '.local.env'),
    }),
    UsersModule,
    TodosModule,
    CacheModule,
    RedisQueueModule,
    LoggerModule,
    UsersPrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(WinstonMiddleware).forRoutes('*');
  }
}
