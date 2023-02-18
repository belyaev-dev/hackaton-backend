import type { Task as PrismaTask } from '@prisma/client';

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export type Task = PrismaTask;
