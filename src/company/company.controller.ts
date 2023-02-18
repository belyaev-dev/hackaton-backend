import { Controller, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';

@ApiTags('company')
@Controller('company')
export class CompanyController {
  private logger = new Logger(CompanyController.name);

  constructor(private readonly companyService: CompanyService) {}
}
