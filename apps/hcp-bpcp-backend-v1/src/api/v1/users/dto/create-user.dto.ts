import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'User ID' })
  readonly userId: string;
  @ApiProperty({ description: 'Password' })
  readonly password: string;
  @ApiProperty({ description: 'First name' })
  readonly firstName: string;
  @ApiProperty({ description: 'Last name' })
  readonly lastName: string;
  @ApiProperty({ description: 'email' })
  readonly email: string;
}
