import { CacheModule as NestCacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    NestCacheModule.registerAsync({
      isGlobal: true,
      useFactory: () => ({
        store: redisStore,
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        ttl: 60,
        auth_pass: process.env.REDIS_PASSWORD,
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class RedisCacheModule {}
