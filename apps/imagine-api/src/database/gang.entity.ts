import { Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';

@Entity('archangel_gangs')
export class GangEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id?: number;

  @Column({ name: 'display_name' })
  displayName!: string;

  @Column()
  description!: string;

  @Column({ name: 'badge' })
  badge!: string;

  @Column({ name: 'user_id' })
  userID!: number;

  @Column({ name: 'room_id' })
  roomID!: number;
}
