import { Module } from '@nestjs/common';
import { CounterpartyService } from './counterparty.service';
import { CounterpartyController } from './counterparty.controller';
import { PrismaService } from 'src/common/services/prisma.service';

@Module({
  controllers: [CounterpartyController],
  providers: [CounterpartyService, PrismaService],
})
export class CounterpartyModule {}
