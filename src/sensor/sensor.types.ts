import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  Sensor as SensorPrisma,
  SensorReading,
  SensorReading as SensorReadingPrisma,
} from '@prisma/client';
import { Apartment } from 'src/apartment/apartment.types';
import { Estate } from 'src/estate/estate.types';

export type ISensor = SensorPrisma;

export type ISensorReading = SensorReadingPrisma;

export enum SensorType {
  Door = 'DOOR',
  Window = 'WINDOW',
  Temperature = 'TEMPERATURE',
  Humidity = 'HUMIDITY',
  Occupancy = 'OCCUPANCY',
  Motion = 'MOTION',
  WaterLeak = 'WATER_LEAK',
  CO2 = 'CO2',
  FireSmoke = 'FIRE_SMOKE',
  AccessControl = 'ACCESS_CONTROL',
  Elevator = 'ELEVATOR',
  Noise = 'NOISE',
}

export class Sensor {
  @ApiPropertyOptional()
  id?: number;

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

  @ApiPropertyOptional()
  reading?: SensorReading[];
}
