import { ApiProperty } from '@nestjs/swagger';
// import { Sensor } from '../sensor.types';

export class CreateReadingDto {
  @ApiProperty()
  value: string;

  @ApiProperty()
  timestamp: Date;

  // @ApiProperty()
  // sensor: Sensor;

  // @ApiProperty()
  // sensorId: number;
}
