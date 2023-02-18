import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task, TaskStatus } from './task.types';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
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

  async getTaskById(id: number): Promise<Task> {
    const found = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.prisma.task.create({ data: createTaskDto });
  }

  async deleteTask(id: number): Promise<void> {
    await this.prisma.task.delete({
      where: { id },
    });
    // if (result. === 0) {
    //   throw new NotFoundException(`Task with ID "${id}" not found`);
    // }
  }

  async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
    const task = await this.prisma.task.update({
      where: { id },
      data: { status },
    });
    return task;
  }
}
