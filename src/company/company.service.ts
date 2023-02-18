import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { Company } from './company.types';

@Injectable()
export class CompanyService {
  private logger = new Logger(CompanyService.name);

  constructor(private readonly prisma: PrismaService) {}

  public async getCompanyById(id: number): Promise<Company | null> {
    return this.prisma.company.findUnique({
      where: { id },
    });
  }
}
