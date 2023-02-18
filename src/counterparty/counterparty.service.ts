import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';

@Injectable()
export class CounterpartyService {
  constructor(private readonly prisma: PrismaService) {}
}
