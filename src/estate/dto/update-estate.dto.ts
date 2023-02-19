import { PartialType } from '@nestjs/mapped-types';
import { CreateEstateDto } from './create-estate.dto';

export class UpdateEstateDto extends PartialType(CreateEstateDto) {}
