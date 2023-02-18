import { Module } from '@nestjs/common';
import { CounterpartyService } from './counterparty.service';
import { CounterpartyController } from './counterparty.controller';

@Module({
  controllers: [CounterpartyController],
  providers: [CounterpartyService],
})
export class CounterpartyModule {}
