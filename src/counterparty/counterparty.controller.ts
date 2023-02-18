import { Controller } from '@nestjs/common';
import { CounterpartyService } from './counterparty.service';

@Controller('counterparty')
export class CounterpartyController {
  constructor(private readonly counterpartyService: CounterpartyService) {}
}
