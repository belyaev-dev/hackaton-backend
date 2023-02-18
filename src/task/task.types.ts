import { Task as PrismaTask } from '@prisma/client';

export enum TaskStatus {
  Open = 'OPEN',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE',
}

export type Task = PrismaTask;
