import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    description: 'ID связанного обьекта недвижимости',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  estateId: number;

  @ApiProperty({ description: 'Название задачи', required: true })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Описание задачи', required: true })
  @IsNotEmpty()
  description: string;
}
