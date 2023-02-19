import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Apartment } from 'src/apartment/apartment.types';
import { Estate } from '../../estate/estate.types';
import { SensorType, SensorReading } from '../sensor.types';

export class CreateSensorDto {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  type: SensorType;

  @ApiProperty()
  estateId: number;

  @ApiProperty()
  apartmentId?: number;

  @ApiProperty()
  sensorReadingId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiPropertyOptional()
  estate?: Estate;

  @ApiPropertyOptional()
  apartment?: Apartment;

  @ApiPropertyOptional({ type: SensorReading, isArray: true })
  readings?: SensorReading[];
}
