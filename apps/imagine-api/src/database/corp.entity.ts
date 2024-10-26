import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum CorpIndustry {
  Bank = "bank",
  DriversEd = "drivers-ed",
  Farm = "farm",
  Fish = "fish",
  Mine = "mine",
  Lumber = "lumber",
  GunStore = "gun-store",
  Retail = "retail",
  Hospital = "hospital",
  Paramedic = "paramedic",
  Police = "police",
  PublicAid = "public-aid"
}

export enum CorpSector {
  Government = "government",
  Private = "private"
}



@Entity('archangel_corps')
export class CorpEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'display_name' })
  displayName!: string;

  @Column()
  description!: string;

  @Column({ name: 'badge' })
  badge!: string;

  @Column()
  industry!: CorpIndustry;

  @Column()
  sector!: CorpSector;

  @Column({ name: 'user_id' })
  userID!: number;

  @Column({ name: 'room_id' })
  roomID!: number;
}
