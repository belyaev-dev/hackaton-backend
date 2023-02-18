import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';

@Injectable()
export class EstateService {
  constructor(private readonly prisma: PrismaService) {}
}
