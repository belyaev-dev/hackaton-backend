import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CounterpartyType } from '../counterparty.types';

export class CreateCounterpartyDto {
  @ApiProperty({ type: 'enum', enum: CounterpartyType })
  type: CounterpartyType;

  @ApiProperty()
  name: string;

  @ApiProperty()
  inn: string;

  @ApiPropertyOptional()
  phone: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  ogrn?: string;

  @ApiPropertyOptional()
  kpp?: string;

  @ApiPropertyOptional()
  okpo?: string;

  @ApiPropertyOptional()
  director: string;

  @ApiPropertyOptional()
  registration: string;

  @ApiPropertyOptional()
  address: string;

  @ApiPropertyOptional()
  createdDate: Date;

  @ApiPropertyOptional()
  updatedDate: Date;
}
