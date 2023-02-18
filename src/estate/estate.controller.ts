import { Controller, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EstateService } from './estate.service';
@ApiTags('estate')
@Controller('estate')
export class EstateController {
  private logger = new Logger(EstateController.name);

  constructor(private readonly estateService: EstateService) {}
}
