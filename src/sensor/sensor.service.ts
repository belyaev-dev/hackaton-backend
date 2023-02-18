import { Injectable, Logger } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { PrismaService } from 'src/common/services/prisma.service';
import { ISensor, Sensor } from './sensor.types';

@Injectable()
export class SensorService {
  private logger = new Logger(SensorService.name);

  constructor(private readonly prisma: PrismaService) {}

  @ApiCreatedResponse({ type: Sensor })
  async create(data: any): Promise<ISensor> {
    return this.prisma.sensor.create({ data });
  }

  @ApiOkResponse({ type: Sensor, isArray: true })
  @ApiNotFoundResponse({ description: 'Not found' })
  async findAll(): Promise<ISensor[] | null> {
    return this.prisma.sensor.findMany({});
  }

  @ApiOkResponse({ type: Sensor })
  @ApiNotFoundResponse({ description: 'Not found' })
  async findOne(id: number): Promise<ISensor | null> {
    return this.prisma.sensor.findUnique({ where: { id } });
  }

  @ApiOkResponse({ type: Sensor })
  @ApiNotFoundResponse({ description: 'Not found' })
  async update(id: number, data: any): Promise<ISensor | null> {
    return this.prisma.sensor.update({ where: { id }, data });
  }

  @ApiOkResponse({ description: 'Deleted' })
  remove(id: number): void {
    this.prisma.sensor.delete({ where: { id } });
  }
}
