import { Injectable } from "@nestjs/common";
import { CorpIndustry, CorpEntity } from "../database/corp.entity";
import { CorpRepository } from "../database/corp.repository";

@Injectable()
export class GovernmentFacilityService {

    constructor(private readonly corporationRepo: CorpRepository) { }

    async getWelfareCorp(): Promise<CorpEntity> {
        return this.corporationRepo.findOneOrFail({
            industry: CorpIndustry.PublicAid,
        })
    }

}