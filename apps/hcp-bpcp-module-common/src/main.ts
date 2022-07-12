import { NestFactory } from '@nestjs/core';
import { HcpBpcpModuleCommonModule } from './hcp-bpcp-module-common.module';

async function bootstrap() {
  const app = await NestFactory.create(HcpBpcpModuleCommonModule);
  await app.listen(3000);
}
bootstrap();
