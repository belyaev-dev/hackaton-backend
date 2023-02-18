import { Module } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { SensorController } from './sensor.controller';

@Module({
  controllers: [SensorController],
  providers: [SensorService]
})
export class SensorModule {}
