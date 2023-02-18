import { ApiProperty } from '@nestjs/swagger';
import { Apartment } from 'src/apartment/apartment.types';
import { Counterparty } from 'src/counterparty/counterparty.types';

export class CreateReservationDto {
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
