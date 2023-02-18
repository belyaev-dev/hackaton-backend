import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  Meter as PrismaMeter,
  MeterReading as PrismaMeterReading,
} from '@prisma/client';

export type IMeter = PrismaMeter;

export type IMeterReading = PrismaMeterReading;

export enum MeterType {
  Water = 'WATER',
  Gas = 'GAS',
  Warmth = 'WARMTH',
  Electricity = 'ELECTRICITY',
}

export class MeterReading {
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty()
  value: number;

  @ApiProperty()
  timestamp: Date;

  @ApiProperty()
  meterId: number;
}

export class Meter {
  @ApiProperty()
  id: number;

  @ApiProperty()
  uuid: string;

  @ApiProperty()
  type: MeterType;

  @ApiProperty()
  estateId: number;

  @ApiPropertyOptional()
  apartmentId?: number;

  @ApiPropertyOptional()
  readings?: MeterReading[];
}
