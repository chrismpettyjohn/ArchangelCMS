import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nova_beta_codes')
export class BetaCodeEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'code', type: 'varchar' })
  betaCode!: string;

  @Column({ name: 'users_id' })
  claimedByUserId?: number;

  @Column({ name: 'claimed_at' })
  claimedAt?: number;

  @Column({ name: 'created_at' })
  createdAt!: number;
}
