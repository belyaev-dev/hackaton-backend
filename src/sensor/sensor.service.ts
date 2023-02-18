import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { Sensor } from './sensor.types';

@Injectable()
export class SensorService {
  private logger = new Logger(SensorService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(data: any): Promise<Sensor> {
    return this.prisma.sensor.create({ data });
  }

  async findAll(): Promise<Sensor[] | null> {
    return this.prisma.sensor.findMany({});
  }

  async findOne(id: number): Promise<Sensor | null> {
    return this.prisma.sensor.findUnique({ where: { id } });
  }

  async update(id: number, data: any): Promise<Sensor | null> {
    return this.prisma.sensor.update({ where: { id }, data });
  }

  remove(id: number): void {
    this.prisma.sensor.delete({ where: { id } });
  }
}
