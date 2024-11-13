import { JwtService } from '@nestjs/jwt';
import { SessionContents } from './session.types';
import { HashService } from '../common/hash.service';
import { SessionCreatedModel, SessionModel } from './session.model';
import { UserRepository } from '../database/user.repository';
import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class SessionService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly hashService: HashService,
  ) { }

  async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<SessionCreatedModel> {
    const user = await this.userRepo.findOneOrFail({ email: email.toLowerCase() });

    if (!user.password) {
      throw new UnauthorizedException();
    }

    const isCorrectPassword = this.hashService.compare(password, user.password);

    if (!isCorrectPassword) {
      throw new UnauthorizedException();
    }

    const accessToken = this.signToken({
      userID: user.id!,
    });

    return {
      accessToken,
      userID: user.id!,
    };
  }

  async generateSession(
    userID: number
  ): Promise<{ accessToken: string; session: SessionModel }> {
    const accessToken = this.signToken({ userID });
    return {
      accessToken,
      session: {
        userID,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    };
  }

  private signToken(sessionContents: SessionContents): string {
    return this.jwtService.sign(sessionContents);
  }
}
