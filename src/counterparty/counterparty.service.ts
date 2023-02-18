import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { Counterparty, ICounterparty } from './counterparty.types';

@Injectable()
export class CounterpartyService {
  private logger = new Logger(CounterpartyService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(data: any): Promise<ICounterparty> {
    return this.prisma.counterparty.create({ data });
  }

  async findAll(): Promise<ICounterparty[] | null> {
    return this.prisma.counterparty.findMany({});
  }

  async findOne(id: number): Promise<ICounterparty | null> {
    return this.prisma.counterparty.findUnique({ where: { id } });
  }

  async update(id: number, data: any): Promise<ICounterparty | null> {
    return this.prisma.counterparty.update({ where: { id }, data });
  }

  remove(id: number): void {
    this.prisma.counterparty.delete({ where: { id } });
  }
}
