import { Module } from '@nestjs/common';
import { HcpBpcpModuleCommonController } from './hcp-bpcp-module-common.controller';
import { HcpBpcpModuleCommonService } from './hcp-bpcp-module-common.service';

@Module({
  imports: [],
  controllers: [HcpBpcpModuleCommonController],
  providers: [HcpBpcpModuleCommonService],
})
export class HcpBpcpModuleCommonModule {}
