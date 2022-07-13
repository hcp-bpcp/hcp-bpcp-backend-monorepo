import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Todo API')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Post('/temporary')
  create_temporary(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create_temporary(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':todoid')
  findOne(@Param('todoid') id: string) {
    return this.todosService.findOne(+id);
  }

  @Put(':todoid')
  update(@Param('todoid') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(+id, updateTodoDto);
  }

  @Delete(':todoid')
  remove(@Param('todoid') id: string) {
    return this.todosService.remove(+id);
  }
}
