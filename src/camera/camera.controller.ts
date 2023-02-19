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
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CameraService } from './camera.service';
import { Camera, ICamera } from './camera.types';
import { CreateCameraDto } from './dto/create-camera.dto';
import { UpdateCameraDto } from './dto/update-camera.dto';

@ApiTags('Камеры')
@Controller('cameras')
export class CameraController {
  constructor(private readonly cameraService: CameraService) {}

  @ApiOperation({
    operationId: 'createCamera',
    summary: '— Создание камеры',
  })
  @ApiCreatedResponse({ type: Camera })
  @Post()
  create(@Body() data: CreateCameraDto): Promise<ICamera> {
    return this.cameraService.create(data);
  }

  @ApiOperation({
    operationId: 'findAllCounterparties',
    summary: '— Получить список всех камер',
  })
  @ApiOkResponse({ type: Camera, isArray: true })
  @Get()
  findAll(): Promise<ICamera[] | null> {
    return this.cameraService.findAll();
  }

  @ApiOperation({
    operationId: 'findOneCamera',
    summary: '— Получение информации о камере',
  })
  @ApiOkResponse({ type: Camera })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ICamera | null> {
    return this.cameraService.findOne(+id);
  }

  @ApiOperation({
    operationId: 'updateCamera',
    summary: '— Обновление информации о камере',
  })
  @ApiOkResponse({ type: Camera })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestDto: UpdateCameraDto,
  ): Promise<ICamera | null> {
    return this.cameraService.update(+id, updateTestDto);
  }

  @ApiOperation({
    operationId: 'removeCamera',
    summary: '— Удаление камеры',
  })
  @ApiOkResponse({ description: 'Deleted' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cameraService.remove(+id);
  }
}
