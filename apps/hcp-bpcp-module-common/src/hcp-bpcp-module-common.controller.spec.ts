import { Test, TestingModule } from '@nestjs/testing';
import { HcpBpcpModuleCommonController } from './hcp-bpcp-module-common.controller';
import { HcpBpcpModuleCommonService } from './hcp-bpcp-module-common.service';

describe('HcpBpcpModuleCommonController', () => {
  let hcpBpcpModuleCommonController: HcpBpcpModuleCommonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HcpBpcpModuleCommonController],
      providers: [HcpBpcpModuleCommonService],
    }).compile();

    hcpBpcpModuleCommonController = app.get<HcpBpcpModuleCommonController>(HcpBpcpModuleCommonController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(hcpBpcpModuleCommonController.getHello()).toBe('Hello World!');
    });
  });
});
