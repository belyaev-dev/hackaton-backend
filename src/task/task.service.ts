import { Injectable, NotFoundException } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { PrismaService } from 'src/common/services/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { ITask, Task, TaskStatus } from './task.types';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  @ApiOkResponse({ type: Task, isArray: true })
  @ApiNotFoundResponse({ description: 'Not found' })
  async getTasks(filterDto: GetTasksFilterDto): Promise<ITask[]> {
    const where = {
      OR: [
        { description: { contains: filterDto.search || '' } },
        { title: { contains: filterDto.search || '' } },
      ],
    };

    if (filterDto.status) {
      where['status'] = filterDto.status;
    }

    return await this.prisma.task.findMany({
      where,
    });
  }

  @ApiOkResponse({ type: Task })
  @ApiNotFoundResponse({ description: 'Not found' })
  async getTaskById(id: number): Promise<ITask> {
    const found = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  @ApiCreatedResponse({ type: Task })
  async createTask(createTaskDto: CreateTaskDto): Promise<ITask> {
    return this.prisma.task.create({ data: createTaskDto });
  }

  @ApiOkResponse({ description: 'Deleted' })
  async deleteTask(id: number): Promise<void> {
    await this.prisma.task.delete({
      where: { id },
    });
    // if (result. === 0) {
    //   throw new NotFoundException(`Task with ID "${id}" not found`);
    // }
  }

  @ApiOkResponse({ type: Task })
  async updateTaskStatus(id: number, status: TaskStatus): Promise<ITask> {
    const task = await this.prisma.task.update({
      where: { id },
      data: { status },
    });
    return task;
  }
}
