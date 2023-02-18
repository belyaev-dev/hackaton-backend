import type { Counterparty as PrismaCounterparty } from '@prisma/client';

export type Counterparty = PrismaCounterparty;

export enum CounterpartyType {
  IndividualEntrepreneur = 'INDIVIDUAL_ENTREPRENEUR',
  LimitedLiabilityCompany = 'LIMITED_LIABILITY_COMPANY',
  JointStockCompany = 'JOINT_STOCK_COMPANY',
  Other = 'OTHER',
}
