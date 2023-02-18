import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Task as PrismaTask } from '@prisma/client';

export enum TaskStatus {
  Open = 'OPEN',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE',
}

export type ITask = PrismaTask;

export class Task {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ enum: TaskStatus, type: 'enum' })
  status: TaskStatus;

  @ApiPropertyOptional()
  description?: string;

  @ApiProperty()
  creationDate: Date;

  @ApiPropertyOptional()
  estateId: number;
}
