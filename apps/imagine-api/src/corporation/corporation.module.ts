import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SessionModule } from '../session/session.module';
import { CorporationResolver } from './corporation.resolver';
import { registerEnumType } from '@nestjs/graphql';
import { CorpIndustry, CorpSector } from '../database/corp.entity';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [CorporationResolver],
})
export class CorporationModule { }

registerEnumType(CorpSector, {
  name: 'CorpSector',
})

registerEnumType(CorpIndustry, {
  name: 'CorpIndustry',
})