import { PartialType } from '@nestjs/mapped-types';
import { CreateCounterpartyDto } from './create-counterparty.dto';

export class UpdateCounterpartyDto extends PartialType(CreateCounterpartyDto) {}
