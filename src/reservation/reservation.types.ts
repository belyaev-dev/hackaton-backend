import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  Apartment,
  Counterparty,
  Reservation as PrismaReservation,
} from '@prisma/client';

export type IReservation = PrismaReservation;

export class Reservation {
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  counterpartyId: number;

  @ApiProperty()
  apartmentId: number;

  @ApiProperty()
  createdBy: Counterparty;

  @ApiProperty()
  apartment: Apartment;
}
