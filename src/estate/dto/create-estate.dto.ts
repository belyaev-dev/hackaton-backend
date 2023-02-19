import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Apartment } from 'src/apartment/apartment.types';
import { Meter } from 'src/meter/meter.types';
import { Sensor } from 'src/sensor/sensor.types';
import { Task } from 'src/task/task.types';

export class CreateEstateDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  companyId: number;

  //   @ApiProperty()
  //   company: Company;

  @ApiPropertyOptional({ isArray: true })
  @IsOptional()
  tasks: Task[];

  @ApiPropertyOptional({ isArray: true })
  @IsOptional()
  apartments: Apartment[];

  @ApiPropertyOptional({ isArray: true })
  @IsOptional()
  sensors: Sensor[];

  @ApiPropertyOptional({ isArray: true })
  @IsOptional()
  meters: Meter[];
}
