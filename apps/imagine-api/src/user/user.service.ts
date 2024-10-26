import DayJS from 'dayjs';
import Random from 'randomstring';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../database/user.entity';
import { DEFAULT_USER_VALUES } from './user.constant';
import { UserRepository } from '../database/user.repository';
import { IMAGINE_SITE_NAME } from '../imagine.constant';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
  ) { }

  async createQuickUser(
    ipAddress: string,
    override?: Partial<UserEntity>
  ): Promise<UserEntity> {
    const currentDate = DayJS().unix();
    const username = `${IMAGINE_SITE_NAME.toUpperCase()}-${Random.generate(15)}`;
    return this.userRepo.create({
      ...DEFAULT_USER_VALUES,
      username,
      ipLast: ipAddress,
      ipRegistered: ipAddress,
      accountCreatedAt: currentDate,
      ...override,
    });
  }
}
