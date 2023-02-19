import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Meter } from 'src/meter/meter.types';
import { Reservation } from 'src/reservation/reservation.types';
import { Sensor } from 'src/sensor/sensor.types';
import { ApartmentType } from '../apartment.types';

export class CreateApartmentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: 'enum', enum: ApartmentType })
  apartmentType: ApartmentType;

  @ApiProperty()
  estateId: number;

  @ApiPropertyOptional({ type: Sensor, isArray: true })
  sensors?: Sensor[];

  @ApiPropertyOptional({ type: Meter, isArray: true })
  meters?: Meter[];

  @ApiPropertyOptional({ type: Reservation, isArray: true })
  reservations?: Reservation[];
}
