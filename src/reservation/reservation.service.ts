import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { IReservation, Reservation } from './reservation.types';
// import { CompanyService } from 'src/company/company.service';
// import { ObjectService } from 'src/object/object.service';

@Injectable()
export class ReservationService {
  private logger = new Logger(ReservationService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(data: any): Promise<IReservation> {
    return this.prisma.reservation.create({ data });
  }

  async findAll(): Promise<IReservation[] | null> {
    return this.prisma.reservation.findMany({});
  }

  async findOne(id: number): Promise<IReservation | null> {
    return this.prisma.reservation.findUnique({ where: { id } });
  }

  async update(id: number, data: any): Promise<IReservation | null> {
    return this.prisma.reservation.update({ where: { id }, data });
  }

  remove(id: number): void {
    this.prisma.reservation.delete({ where: { id } });
  }
}
