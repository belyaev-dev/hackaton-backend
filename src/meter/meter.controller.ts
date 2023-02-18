import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { CreateMeterDto } from './dto/create-meter.dto';
import { UpdateMeterDto } from './dto/update-meter.dto';
import { MeterService } from './meter.service';
import { IMeter, Meter } from './meter.types';

@ApiTags('Счетчики')
@Controller('meters')
export class MeterController {
  constructor(private readonly meterService: MeterService) {}

  @ApiOperation({
    operationId: 'createMeter',
    summary: '— Создание счетчика',
  })
  @ApiCreatedResponse({ type: Meter })
  @Post()
  create(@Body() data: CreateMeterDto): Promise<IMeter> {
    return this.meterService.create(data);
  }

  @ApiOperation({
    operationId: 'findAllMeters',
    summary: '— Получить список всех счетчиков',
  })
  @ApiOkResponse({ type: Meter, isArray: true })
  @Get()
  findAll(): Promise<IMeter[] | null> {
    return this.meterService.findAll();
  }

  @ApiOperation({
    operationId: 'findOneMeter',
    summary: '— Получение информации о счетчике',
  })
  @ApiOkResponse({ type: Meter })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<IMeter | null> {
    return this.meterService.findOne(+id);
  }

  @ApiOperation({
    operationId: 'updateMeter',
    summary: '— Обновление информации о счетчике',
  })
  @ApiOkResponse({ type: Meter })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdateMeterDto,
  ): Promise<IMeter | null> {
    return this.meterService.update(+id, data);
  }

  @ApiOperation({
    operationId: 'deleteReservation',
    summary: '— Удаление счетчика из системы',
  })
  @ApiOkResponse({ description: 'Deleted' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meterService.remove(+id);
  }
}
