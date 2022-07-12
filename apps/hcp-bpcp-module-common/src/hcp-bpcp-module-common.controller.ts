import { Controller, Get } from '@nestjs/common';
import { HcpBpcpModuleCommonService } from './hcp-bpcp-module-common.service';

@Controller()
export class HcpBpcpModuleCommonController {
  constructor(private readonly hcpBpcpModuleCommonService: HcpBpcpModuleCommonService) {}

  @Get()
  getHello(): string {
    return this.hcpBpcpModuleCommonService.getHello();
  }
}
