import { Controller, Logger } from '@nestjs/common';
import { CounterpartyService } from './counterparty.service';

@Controller('counterparty')
export class CounterpartyController {
  private logger = new Logger(CounterpartyController.name);

  constructor(private readonly counterpartyService: CounterpartyService) {}
}
