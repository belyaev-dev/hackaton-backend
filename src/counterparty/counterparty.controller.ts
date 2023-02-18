import { Controller, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CounterpartyService } from './counterparty.service';
@ApiTags('counterparty')
@Controller('counterparty')
export class CounterpartyController {
  private logger = new Logger(CounterpartyController.name);

  constructor(private readonly counterpartyService: CounterpartyService) {}
}
