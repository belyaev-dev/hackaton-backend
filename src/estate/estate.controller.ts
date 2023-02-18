import { Controller } from '@nestjs/common';
import { EstateService } from './estate.service';

@Controller('estates')
export class EstateController {
  constructor(private readonly estateService: EstateService) {}
}
