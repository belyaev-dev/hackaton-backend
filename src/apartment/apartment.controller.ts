import { Controller } from '@nestjs/common';
import { ApartmentService } from './apartment.service';

@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}
}
