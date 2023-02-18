import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApartmentService } from './apartment.service';

@ApiTags('apartments')
@Controller('apartments')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}
}
