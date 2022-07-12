import { Module } from '@nestjs/common';
import { PostgresqlModule } from '../../../database/postgresql/postgresql.module';
import { userProviders } from './entities/users.providers';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [PostgresqlModule],
  providers: [...userProviders, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
