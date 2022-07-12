import { Inject, Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,

    @Inject('DATA_SOURCE')
    private dataSource: DataSource,
  ) {}

  queryRunner = this.dataSource.createQueryRunner();

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.userId = createUserDto.userId;
    user.password = createUserDto.password;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;

    return this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
    const user = new User();
    user.userId = updateUserDto.userId;
    user.password = updateUserDto.password;
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.email = updateUserDto.email;

    await this.userRepository.update(id, user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async generateFullName(id): Promise<string> {
    return this.queryRunner.manager.query(
      `select firstname || ' ' || lastname as fullname from users u where id = $1`,
      [id],
    );
  }
}
