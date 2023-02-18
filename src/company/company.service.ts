import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { Company } from './company.types';

@Injectable()
export class CompanyService {
  private logger = new Logger(CompanyService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(data: any): Promise<Company> {
    return this.prisma.company.create({ data });
  }

  async findAll(): Promise<Company[]> {
    return this.prisma.company.findMany({});
  }

  async findOne(id: number): Promise<Company | null> {
    return this.prisma.company.findUnique({ where: { id } });
  }

  async update(id: number, data: any): Promise<Company | null> {
    return this.prisma.company.update({ where: { id }, data });
  }

  remove(id: number): void {
    this.prisma.company.delete({ where: { id } });
  }
}
