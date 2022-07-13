import { Module } from '@nestjs/common';
import { UsersPrismaService } from './users-prisma.service';
import { UsersPrismaController } from './users-prisma.controller';
import { PrismaService } from '../../../database/postgresql/prisma/prisma.service';

@Module({
  controllers: [UsersPrismaController],
  providers: [UsersPrismaService, PrismaService],
  imports: [],
})
export class UsersPrismaModule {}
