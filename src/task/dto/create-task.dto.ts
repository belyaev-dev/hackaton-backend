import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsNumber()
  objectId: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
