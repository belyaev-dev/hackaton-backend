import { Injectable, Logger } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { PrismaService } from 'src/common/services/prisma.service';
import { ISensor, ISensorReading, Sensor, SensorReading } from './sensor.types';

@Injectable()
export class SensorService {
  private logger = new Logger(SensorService.name);

  constructor(private readonly prisma: PrismaService) {}

  @ApiCreatedResponse({ type: Sensor })
  async createSensor(data: any): Promise<ISensor> {
    return this.prisma.sensor.create({ data });
  }

  @ApiOkResponse({ type: Sensor, isArray: true })
  @ApiNotFoundResponse({ description: 'Not found' })
  async findAllSensors(): Promise<ISensor[] | null> {
    return this.prisma.sensor.findMany({});
  }

  @ApiOkResponse({ type: Sensor })
  @ApiNotFoundResponse({ description: 'Not found' })
  async findOneSensor(id: number): Promise<ISensor | null> {
    return this.prisma.sensor.findUnique({ where: { id } });
  }

  @ApiOkResponse({ type: Sensor })
  @ApiNotFoundResponse({ description: 'Not found' })
  async updateSensor(id: number, data: any): Promise<ISensor | null> {
    return this.prisma.sensor.update({ where: { id }, data });
  }

  @ApiOkResponse({ description: 'Deleted' })
  removeSensor(id: number): void {
    this.prisma.sensor.delete({ where: { id } });
  }

  @ApiCreatedResponse({ type: SensorReading })
  async createReading(sensorId: number, data: any): Promise<ISensorReading> {
    return this.prisma.sensorReading.create({ sensorId, ...data });
  }

  @ApiOkResponse({ type: SensorReading, isArray: true })
  @ApiNotFoundResponse({ description: 'Not found' })
  async findAllReadings(sensorId: number): Promise<ISensorReading[] | null> {
    // const sensor = this.prisma.sensor.findUnique({ where: { id: sensorId } });

    // if (!sensor) throw new NotFoundException('Sensor not found');
    return this.prisma.sensorReading.findMany({
      where: { sensorId: sensorId },
    });
  }

  @ApiOkResponse({ type: SensorReading })
  @ApiNotFoundResponse({ description: 'Not found' })
  async findOneReading(id: number): Promise<ISensorReading | null> {
    return this.prisma.sensorReading.findUnique({ where: { id } });
  }

  @ApiOkResponse({ type: SensorReading })
  @ApiNotFoundResponse({ description: 'Not found' })
  async updateReading(id: number, data: any): Promise<ISensorReading | null> {
    return this.prisma.sensorReading.update({ where: { id }, data });
  }

  @ApiOkResponse({ description: 'Deleted' })
  removeReading(id: number): void {
    this.prisma.sensorReading.delete({ where: { id } });
  }
}
