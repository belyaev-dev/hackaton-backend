import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { Company as PrismaCompany } from '@prisma/client';

export type ICompany = PrismaCompany;

export class Company {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  passwordHash: string;

  @ApiPropertyOptional({ required: false })
  image?: string;

  @ApiProperty()
  registrationDate: Date;
}
