import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Camera as PrismaCamera } from '@prisma/client';

export type ICamera = PrismaCamera;

export class Camera {
  @ApiProperty()
  id: number;

  @ApiProperty()
  uuid: string;

  @ApiProperty()
  link: string;

  @ApiProperty()
  estateId: number;

  @ApiPropertyOptional()
  apartmentId: number;
}
