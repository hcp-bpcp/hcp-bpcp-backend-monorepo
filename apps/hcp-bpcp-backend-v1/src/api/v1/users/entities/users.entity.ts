import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'userid', length: 255 })
  userId: string;

  @Column({ length: 255 })
  password: string;

  @Column({ name: 'firstname', length: 255 })
  firstName: string;

  @Column({ name: 'lastname', length: 255 })
  lastName: string;

  @Column({ length: 255, nullable: true })
  email: string;
}
