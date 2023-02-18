import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { Apartment } from './apartment.types';

@Injectable()
export class ApartmentService {
  private logger = new Logger(ApartmentService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(data: any): Promise<Apartment> {
    return this.prisma.apartment.create({ data });
  }

  async findAll(): Promise<Apartment[]> {
    return this.prisma.apartment.findMany({});
  }

  async findOne(id: number): Promise<Apartment | null> {
    return this.prisma.apartment.findUnique({ where: { id } });
  }

  async update(id: number, data: any): Promise<Apartment | null> {
    return this.prisma.apartment.update({ where: { id }, data });
  }

  remove(id: number): void {
    this.prisma.apartment.delete({ where: { id } });
  }
}
