import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('archangel_players')
export class RPStatsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'user_id', unique: true })
  userID!: number;

  @Column({ name: 'health_now' })
  healthCurrent!: number;

  @Column({ name: 'health_max' })
  healthMax!: number;

  @Column({ name: 'corporation_id' })
  corporationID!: number;

  @Column({ name: 'corporation_position_id' })
  corporationPositionID!: number;

  @Column({ name: 'gang_id' })
  gangID!: number;
}
