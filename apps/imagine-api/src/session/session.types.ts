import { Request } from 'express';
import { UserEntity } from '../database/user.entity';

export interface RequestWithSession extends Request {
  user: UserEntity;
}

export interface SessionContents {
  userID: number;
}

export interface RawRequest extends Request {
  user?: UserEntity;
}
