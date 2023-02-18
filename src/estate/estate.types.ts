import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { Estate as PrismaEstate } from '@prisma/client';
import { Apartment } from 'src/apartment/apartment.types';
import { Company } from 'src/company/company.types';
import { Meter } from 'src/meter/meter.types';
import { Sensor } from 'src/sensor/sensor.types';
import { Task } from 'src/task/task.types';

export type IEstate = PrismaEstate;

export class Estate {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  companyId: number;

  @ApiProperty()
  company: Company;

  @ApiPropertyOptional({ isArray: true })
  tasks: Task[];

  @ApiPropertyOptional({ isArray: true })
  apartments: Apartment[];

  @ApiPropertyOptional({ isArray: true })
  sensors: Sensor[];

  @ApiPropertyOptional({ isArray: true })
  meters: Meter[];
}
