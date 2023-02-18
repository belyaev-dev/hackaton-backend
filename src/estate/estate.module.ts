import { Module } from '@nestjs/common';
import { EstateService } from './estate.service';
import { EstateController } from './estate.controller';
import { PrismaService } from 'src/common/services/prisma.service';

@Module({
  controllers: [EstateController],
  providers: [EstateService, PrismaService],
})
export class EstateModule {}
