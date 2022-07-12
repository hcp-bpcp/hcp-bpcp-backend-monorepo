import { Injectable } from '@nestjs/common';

@Injectable()
export class HcpBpcpModuleCommonService {
  getHello(): string {
    return 'Hello World!';
  }
}
