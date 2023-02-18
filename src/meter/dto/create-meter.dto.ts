import { MeterReading, MeterType } from './../meter.types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateMeterDto {
  @ApiProperty({ description: 'Уникальный идентификатор счетчика' })
  @IsNotEmpty()
  @IsString()
  uuid: string;

  @ApiProperty({ enum: MeterType, type: 'enum' })
  @IsEnum(MeterType)
  type: MeterType;

  @ApiProperty()
  @IsNumber()
  estateId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  apartmentId?: number;

  @ApiPropertyOptional({ type: MeterReading, isArray: true })
  @IsOptional()
  readings?: MeterReading[];
}
