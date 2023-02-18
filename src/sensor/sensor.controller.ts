import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SensorService } from './sensor.service';

@ApiTags('Датчики')
@Controller('sensors')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}
}
