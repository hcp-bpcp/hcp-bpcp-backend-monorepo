import { Module } from '@nestjs/common';
import { postgresqlProviders } from './postgresql.providers';

@Module({
  providers: [...postgresqlProviders],
  exports: [...postgresqlProviders],
})
export class PostgresqlModule {}
