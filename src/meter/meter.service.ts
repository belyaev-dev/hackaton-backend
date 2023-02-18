import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { IMeter, Meter } from './meter.types';

@Injectable()
export class MeterService {
  private logger = new Logger(MeterService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(data: any): Promise<IMeter> {
    return this.prisma.meter.create({ data });
  }

  async findAll(): Promise<IMeter[] | null> {
    return this.prisma.meter.findMany({});
  }

  async findOne(id: number): Promise<IMeter | null> {
    return this.prisma.meter.findUnique({ where: { id } });
  }

  async update(id: number, data: any): Promise<IMeter | null> {
    return this.prisma.meter.update({ where: { id }, data });
  }

  remove(id: number): void {
    this.prisma.meter.delete({ where: { id } });
  }
}
