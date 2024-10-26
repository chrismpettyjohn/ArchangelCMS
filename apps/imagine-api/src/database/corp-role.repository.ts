import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from '../utility/base.repository';
import { CorpRoleEntity } from './corp-role.entity';

@Injectable()
export class CorpRoleRepository extends BaseRepository<CorpRoleEntity> {
  constructor(
    @InjectRepository(CorpRoleEntity)
    corporationRankRepo: Repository<CorpRoleEntity>
  ) {
    super(corporationRankRepo);
  }
}
