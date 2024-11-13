import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ name: 'mail', nullable: true })
  email?: string;

  @Column({ name: 'auth_ticket', nullable: true })
  gameSSO?: string;
}
