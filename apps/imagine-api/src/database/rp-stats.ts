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

  @Column({ name: 'energy_now' })
  energyCurrent!: number;

  @Column({ name: 'energy_max' })
  energyMax!: number;

  @Column({ name: 'armor_now' })
  armorCurrent!: number;

  @Column({ name: 'armor_max' })
  armorMax!: number;

  @Column({ name: 'hunger_now' })
  hungerCurrent!: number;

  @Column({ name: 'hunger_max' })
  hungerMax!: number;

  @Column({ name: 'corps_id' })
  corpID!: number;

  @Column({ name: 'corps_roles_id' })
  corpRoleID!: number;

  @Column({ name: 'gangs_id' })
  gangID!: number;

  @Column({ name: 'gangs_roles_id' })
  gangRoleID!: number;
}
