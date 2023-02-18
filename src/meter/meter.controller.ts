import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MeterService } from './meter.service';

@ApiTags('meters')
@Controller('meters')
export class MeterController {
  constructor(private readonly meterService: MeterService) {}
}
