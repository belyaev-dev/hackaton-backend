import { Controller, Logger } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  private logger = new Logger(CompanyController.name);

  constructor(private readonly companyService: CompanyService) {}
}
