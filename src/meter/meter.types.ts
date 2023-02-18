import { Meter as PrismaMeter } from '@prisma/client';

export type Meter = PrismaMeter;

export enum MeterType {
  Water = 'WATER',
  Gas = 'GAS',
  Warmth = 'WARMTH',
  Electricity = 'ELECTRICITY',
}
