import { Module } from '@nestjs/common';
import { RedisCacheModule } from '../../../database/redis/redis.cache.module';
import { CacheController } from './cache.controller';
import { CacheService } from './cache.service';

@Module({
  imports: [RedisCacheModule],
  controllers: [CacheController],
  providers: [CacheService],
})
export class CacheModule {}
