import {ArgsType} from '@nestjs/graphql';
import {CommonArgs} from '../common/common.args';

@ArgsType()
export class SessionArgs extends CommonArgs {}
