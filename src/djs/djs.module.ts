import { Module } from '@nestjs/common';
import { DjsService } from './djs.service';
import { DjsController } from './djs.controller';

@Module({
  providers: [DjsService],
  controllers: [DjsController],
})
export class DjsModule {}