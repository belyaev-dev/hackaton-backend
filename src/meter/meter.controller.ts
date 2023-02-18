import { Controller } from '@nestjs/common';
import { MeterService } from './meter.service';

@Controller('meter')
export class MeterController {
  constructor(private readonly meterService: MeterService) {}
}
