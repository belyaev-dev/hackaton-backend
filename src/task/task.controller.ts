import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  Logger,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.types';
import { TaskStatus } from './task.types';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
// import { Company } from '../company/company.types';

@ApiTags('tasks')
@Controller('tasks')
// @UseGuards(AuthGuard())
export class TaskController {
  private logger = new Logger(TaskController.name);

  constructor(private taskService: TaskService) {}

  @Get()
  @ApiOperation({
    operationId: 'getTasks',
    summary: '— Получение всех задач по фильтру',
  })
  @ApiQuery({ name: 'filterDto', description: 'Фильтр' })
  getTasks(
    @Query(ValidationPipe) filterDto: GetTasksFilterDto,
    // @GetUser() user: User,
  ): Promise<Task[]> {
    // this.logger.verbose(
    //   `User "${user.username}" retrieving all tasks. Filters: ${JSON.stringify(
    //     filterDto,
    //   )}`,
    // );
    return this.taskService.getTasks(filterDto);
  }

  @Get('/:id')
  @ApiOperation({
    operationId: 'getTaskById',
    summary: '— Получение конкретной задачи по ID',
  })
  getTaskById(
    @Param('id', ParseIntPipe) id: number,
    // @GetUser() user: User,
  ): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  @Post()
  @ApiOperation({
    operationId: 'createTask',
    summary: '— Создание новой задачи',
  })
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    // @GetUser() user: User,
  ): Promise<Task> {
    // this.logger.verbose(
    //   `User "${user.username}" created a new task. Data: ${JSON.stringify(
    //     createTaskDto,
    //   )}`,
    // );
    return this.taskService.createTask(createTaskDto);
  }

  @ApiOperation({
    operationId: 'deleteTask',
    summary: '— Удаление задачи',
  })
  @Delete('/:id')
  deleteTask(
    @Param('id', ParseIntPipe) id: number,
    // @GetUser() user: User,
  ): Promise<void> {
    return this.taskService.deleteTask(id);
  }

  @ApiOperation({
    operationId: 'updateTaskStatus',
    summary: '— Обновление статуса задачи',
  })
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    // @GetUser() user: User,
  ): Promise<Task> {
    return this.taskService.updateTaskStatus(id, status);
  }
}
