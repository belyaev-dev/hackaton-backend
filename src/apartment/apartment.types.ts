import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Apartment as PrismaApartment } from '@prisma/client';
import { Estate } from 'src/estate/estate.types';
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

  @ApiProperty({ type: 'enum', enum: ApartmentType })
  apartmentType: ApartmentType;

  @ApiProperty()
  estateId: number;

  @ApiProperty({ type: Estate })
  estate?: Estate;

  @ApiPropertyOptional({ type: Sensor, isArray: true })
  sensors?: Sensor[];

  @ApiPropertyOptional({ type: Meter, isArray: true })
  meters?: Meter[];

  @ApiPropertyOptional({ type: Reservation, isArray: true })
  reservations?: Reservation[];
}
