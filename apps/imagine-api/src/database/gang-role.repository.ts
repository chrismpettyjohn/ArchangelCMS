import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from '../utility/base.repository';
import { GangRoleEntity } from './gang-role.entity';

@Injectable()
export class GangRoleRepository extends BaseRepository<GangRoleEntity> {
    constructor(
        @InjectRepository(GangRoleEntity)
        gangRoleRepo: Repository<GangRoleEntity>
    ) {
        super(gangRoleRepo);
    }
}
