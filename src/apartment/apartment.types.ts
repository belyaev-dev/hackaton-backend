import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Apartment as PrismaApartment, Estate } from '@prisma/client';
import { Meter } from 'src/meter/meter.types';
import { Reservation } from 'src/reservation/reservation.types';
import { Sensor } from 'src/sensor/sensor.types';

export type IApartment = PrismaApartment;

export enum ApartmentType {
  Resedential = 'RESEDENTIAL',
  Commercial = 'COMMERCIAL',
}

export class Apartment {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  apartmentType: ApartmentType;

  @ApiProperty()
  estateId: number;

  @ApiPropertyOptional({ isArray: true })
  estate?: Estate;

  @ApiPropertyOptional({ isArray: true })
  sensors?: Sensor[];

  @ApiPropertyOptional({ isArray: true })
  meters?: Meter[];

  @ApiPropertyOptional({ isArray: true })
  Reservation?: Reservation[];
}
