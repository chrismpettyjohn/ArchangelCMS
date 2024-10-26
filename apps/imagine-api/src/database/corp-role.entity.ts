import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('archangel_corps_roles')
export class CorpRoleEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'corps_id' })
  corpID!: number;

  @Column({ name: 'order_id' })
  orderID!: number;

  @Column({ name: 'display_name' })
  displayName!: string;

  @Column()
  description!: string;

  @Column({ name: 'salary' })
  salary!: number;
}
