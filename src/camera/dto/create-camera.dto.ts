import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCameraDto {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  link: string;

  @ApiProperty()
  estateId: number;

  @ApiPropertyOptional()
  apartmentId: number;
}
