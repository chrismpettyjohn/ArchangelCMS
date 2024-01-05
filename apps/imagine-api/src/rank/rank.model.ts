import {Field, ObjectType} from '@nestjs/graphql';
import {RankEntity} from '../database/rank.entity';
import {RankFlagsModel, RankScopesModel} from './rank-scopes.model';

@ObjectType()
export class RankModel {
  @Field({nullable: true})
  id!: number;

  @Field({nullable: true})
  name!: string;

  @Field({nullable: true})
  badgeCode!: string;

  @Field({nullable: true})
  backgroundColor!: string;

  @Field(() => RankScopesModel, {nullable: true})
  scopes!: RankScopesModel;

  @Field(() => RankFlagsModel, {nullable: true})
  flags!: RankFlagsModel;

  static fromEntity(entity: RankEntity): RankModel {
    return {
      id: entity.id!,
      name: entity.name,
      badgeCode: entity.badgeCode,
      backgroundColor: entity.backgroundColor,
      scopes: {
        accessAdminPanel: entity.scopes?.accessAdminPanel ?? false,
        manageArticles: entity.scopes?.manageArticles ?? false,
        manageUsers: entity.scopes?.manageUsers ?? false,
        manageRooms: entity.scopes?.manageRooms ?? false,
        manageBetaCodes: entity.scopes?.manageBetaCodes ?? false,
        managePermissions: entity.scopes?.managePermissions ?? false,
        manageSupportTickets: entity.scopes?.manageSupportTickets ?? false,
        manageStaffApplications:
          entity.scopes?.manageStaffApplications ?? false,
        manageRadioRequests: entity.scopes?.manageRadioRequests ?? false,
        manageBugReports: entity.scopes?.manageBugReports ?? false,
        manageBans: entity.scopes?.manageBans ?? false,
        manageChatlogs: entity.scopes?.manageChatlogs ?? false,
        manageGroups: entity.scopes?.manageGroups ?? false,
        manageLanguages: entity.scopes?.manageLanguages ?? false,
        manageRanks: entity.scopes?.manageRanks ?? false,
        manageSite: entity.scopes?.manageSite ?? false,
        manageWordFilter: entity.scopes?.manageWordFilter ?? false,
        manageStore: entity.scopes?.manageStore ?? false,
      },
      flags: {
        showOnStaffPage: entity.flags?.showOnStaffPage ?? false,
        acceptingApplications: entity.flags?.acceptingApplications ?? false,
      },
    };
  }
}
