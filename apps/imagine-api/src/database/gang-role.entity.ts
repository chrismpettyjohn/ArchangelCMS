import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('achangel_gang_roles')
export class GangRoleEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ name: 'gangs_id' })
    gangID!: number;

    @Column({ name: 'order_id' })
    orderID!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;
}