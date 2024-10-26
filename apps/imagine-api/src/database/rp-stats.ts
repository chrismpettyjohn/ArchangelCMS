import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('archangel_players')
export class RPStatsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'users_id', unique: true })
  userID!: number;

  @Column({ name: 'health_now' })
  healthCurrent!: number;

  @Column({ name: 'health_max' })
  healthMax!: number;

  @Column({ name: 'corps_id' })
  corpID!: number;

  @Column({ name: 'corps_roles_id' })
  corpRoleID!: number;

  @Column({ name: 'gangs_id' })
  gangID!: number;

  @Column({ name: 'gangs_roles_id' })
  gangRoleID!: number;
}
