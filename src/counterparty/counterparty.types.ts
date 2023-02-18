import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { Counterparty as PrismaCounterparty } from '@prisma/client';

export type ICounterparty = PrismaCounterparty;

export enum CounterpartyType {
  IndividualEntrepreneur = 'INDIVIDUAL_ENTREPRENEUR',
  LimitedLiabilityCompany = 'LIMITED_LIABILITY_COMPANY',
  JointStockCompany = 'JOINT_STOCK_COMPANY',
  Other = 'OTHER',
}

export class Counterparty {
  @ApiProperty()
  id: number;

  @ApiProperty()
  type: CounterpartyType;

  @ApiProperty()
  name: string;

  @ApiProperty()
  inn: string;

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
  phone: string;

  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  address: string;

  @ApiPropertyOptional()
  createdDate: Date;

  @ApiPropertyOptional()
  updatedDate: Date;
}
