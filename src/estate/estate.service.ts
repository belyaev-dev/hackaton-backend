import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { Estate } from './estate.types';

@Injectable()
export class EstateService {
  private logger = new Logger(EstateService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(data: any): Promise<Estate> {
    return this.prisma.estate.create({ data });
  }

  async findAll(): Promise<Estate[] | null> {
    return this.prisma.estate.findMany({});
  }

  async findOne(id: number): Promise<Estate | null> {
    return this.prisma.estate.findUnique({ where: { id } });
  }

  async update(id: number, data: any): Promise<Estate | null> {
    return this.prisma.estate.update({ where: { id }, data });
  }

  remove(id: number): void {
    this.prisma.estate.delete({ where: { id } });
  }
}
