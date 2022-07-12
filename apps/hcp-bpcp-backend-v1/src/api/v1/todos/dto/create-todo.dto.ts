import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({ description: 'Todo ID' })
  readonly todoid: number;
  @ApiProperty({ description: 'Todo Content' })
  readonly content: string;
  @ApiProperty({ description: 'Todo Completed', default: false })
  readonly completed: string;
}
