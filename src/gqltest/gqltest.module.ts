import { Module } from '@nestjs/common';
import { GqltestResolver } from './gqltest.resolver';

@Module({
    providers: [GqltestResolver]
})
export class GqltestModule {}
