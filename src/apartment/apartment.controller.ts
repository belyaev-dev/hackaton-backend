import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApartmentService } from './apartment.service';

@ApiTags('Площади')
@Controller('apartments')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}
}
