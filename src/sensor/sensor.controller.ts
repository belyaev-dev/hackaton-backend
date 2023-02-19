import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SensorService } from './sensor.service';
import { ISensor, ISensorReading } from './sensor.types';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateReadingDto } from './dto/update-reading';
import { CreateReadingDto } from './dto/create-reading.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';

@ApiTags('Датчики')
@Controller('sensors')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @ApiOperation({
    operationId: 'createSensor',
    summary: '— Создание датчика',
  })
  @Post()
  createSensor(@Body() data: CreateSensorDto): Promise<ISensor> {
    return this.sensorService.createSensor(data);
  }

  @ApiOperation({
    operationId: 'findAllSensors',
    summary: '— Получить список всех датчиков',
  })
  @Get()
  findAllSensors(): Promise<ISensor[] | null> {
    return this.sensorService.findAllSensors();
  }

  @ApiOperation({
    operationId: 'findOneSensor',
    summary: '— Получение информации о датчике',
  })
  @Get(':id')
  findOneSensor(@Param('id') id: number): Promise<ISensor | null> {
    return this.sensorService.findOneSensor(+id);
  }

  @ApiOperation({
    operationId: 'updateSensor',
    summary: '— Обновление информации о датчике',
  })
  @Patch(':id')
  updateSensor(
    @Param('id') id: number,
    @Body() data: UpdateSensorDto,
  ): Promise<ISensor | null> {
    return this.sensorService.updateSensor(+id, data);
  }

  @ApiOperation({
    operationId: 'deleteSensor',
    summary: '— Удаление датчика',
  })
  @Delete(':id')
  removeSensor(@Param('id') id: number) {
    return this.sensorService.removeSensor(+id);
  }

  @ApiOperation({
    operationId: 'createReading',
    summary: '— Передать показания датчика',
  })
  @Post(':sensorId/readings')
  createReading(
    @Param('sensorId') sensorId: number,
    @Body() data: CreateReadingDto,
  ): Promise<ISensorReading> {
    return this.sensorService.createReading(sensorId, data);
  }

  @ApiOperation({
    operationId: 'findAllReadings',
    summary: '— Получить список всех показаний датчика',
  })
  @Get(':sensorId/readings')
  findAllReadings(
    @Param('sensorId') sensorId: number,
  ): Promise<ISensorReading[] | null> {
    return this.sensorService.findAllReadings(sensorId);
  }

  @ApiOperation({
    operationId: 'findOneReading',
    summary: '— Получение информации о показателе датчика',
  })
  @Get(':sensorId/readings/:id')
  findOneReading(@Param('id') id: number): Promise<ISensorReading | null> {
    return this.sensorService.findOneReading(+id);
  }

  @ApiOperation({
    operationId: 'updateReading',
    summary: '— Обновление информации о датчике',
  })
  @Patch(':sensorId/readings/:id')
  updateReading(
    @Param('id') id: number,
    @Body() data: UpdateReadingDto,
  ): Promise<ISensorReading | null> {
    return this.sensorService.updateReading(+id, data);
  }

  @ApiOperation({
    operationId: 'removeReading',
    summary: '— Удаление показаний датчика',
  })
  @Delete(':sensorId/readings/:id')
  removeReading(@Param('id') id: number) {
    return this.sensorService.removeReading(+id);
  }
}
