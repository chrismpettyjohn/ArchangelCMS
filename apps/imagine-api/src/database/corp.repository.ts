import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CorpEntity } from './corp.entity';
import { BaseRepository } from '../utility/base.repository';

@Injectable()
export class CorpRepository extends BaseRepository<CorpEntity> {
  constructor(
    @InjectRepository(CorpEntity)
    gangRepo: Repository<CorpEntity>
  ) {
    super(gangRepo);
  }
}
