import { Module } from '@nestjs/common';
import { MeterService } from './meter.service';
import { MeterController } from './meter.controller';

@Module({
  controllers: [MeterController],
  providers: [MeterService]
})
export class MeterModule {}
