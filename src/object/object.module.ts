import { Module } from '@nestjs/common';
import { ObjectService } from './object.service';
import { ObjectController } from './object.controller';

@Module({
  controllers: [ObjectController],
  providers: [ObjectService]
})
export class ObjectModule {}
