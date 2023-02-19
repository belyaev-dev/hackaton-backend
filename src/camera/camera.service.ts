import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { ICamera } from './camera.types';

@Injectable()
export class CameraService {
  private logger = new Logger(CameraService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(data: any): Promise<ICamera> {
    return this.prisma.camera.create({ data });
  }

  async findAll(): Promise<ICamera[]> {
    return this.prisma.camera.findMany({});
  }

  async findOne(id: number): Promise<ICamera | null> {
    return this.prisma.camera.findUnique({ where: { id } });
  }

  async update(id: number, data: any): Promise<ICamera | null> {
    return this.prisma.camera.update({ where: { id }, data });
  }

  remove(id: number): void {
    this.prisma.camera.delete({ where: { id } });
  }
}
