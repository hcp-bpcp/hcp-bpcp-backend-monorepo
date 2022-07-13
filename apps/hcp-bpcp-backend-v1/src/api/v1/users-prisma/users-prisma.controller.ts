import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UsersPrismaService } from './users-prisma.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UpdateUserDto } from '../users/dto/update-user.dto';

@ApiTags('Prisma User API')
@Controller('users-prisma')
export class UsersPrismaController {
  constructor(private readonly userService: UsersPrismaService) {}

  @Post()
  async create(@Body() userData: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get()
  async findAll(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() userData: UpdateUserDto,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }

  @Get(':id/fullname')
  async getFullName(@Param('id') id: number): Promise<string> {
    return this.userService.generateFullName(id);
  }
}
