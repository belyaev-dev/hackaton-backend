import { Controller } from '@nestjs/common';
import { ObjectService } from './object.service';

@Controller('company/:companyId/object')
export class ObjectController {
  constructor(private readonly objectService: ObjectService) {}
}
