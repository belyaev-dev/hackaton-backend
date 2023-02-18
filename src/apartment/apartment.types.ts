import { Apartment as PrismaApartment } from '@prisma/client';

export type Apartment = PrismaApartment;

export enum ApartmentType {
  Resedential = 'RESEDENTIAL',
  Commercial = 'COMMERCIAL',
}
