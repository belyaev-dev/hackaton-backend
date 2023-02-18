import { TaskStatus } from '../task.types';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.Open, TaskStatus.InProgress, TaskStatus.Done])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
