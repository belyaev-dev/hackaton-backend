import { Controller, Logger } from '@nestjs/common';
import { EstateService } from './estate.service';

@Controller('estates')
export class EstateController {
  private logger = new Logger(EstateController.name);

  constructor(private readonly estateService: EstateService) {}
}
