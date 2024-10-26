import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SessionModule } from '../session/session.module';
import { CorpRoleResolver } from './corporation-role.resolver';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [CorpRoleResolver],
})
export class CorpRoleModule { }
