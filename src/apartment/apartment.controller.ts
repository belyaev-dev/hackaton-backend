import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
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
import { ApartmentService } from './apartment.service';
import { Apartment, IApartment } from './apartment.types';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';

@ApiTags('Площади')
@Controller('apartments')
export class ApartmentController {
  private logger = new Logger(ApartmentController.name);

  constructor(private readonly apartmentService: ApartmentService) {}

  @ApiOperation({
    operationId: 'createApartment',
    summary: '— Создание площади',
  })
  @ApiCreatedResponse({ type: Apartment })
  @Post()
  create(@Body() data: CreateApartmentDto): Promise<IApartment> {
    return this.apartmentService.create(data);
  }

  @ApiOperation({
    operationId: 'findAllApartments',
    summary: '— Получить список всех площадей',
  })
  @ApiOkResponse({ type: Apartment, isArray: true })
  @Get()
  findAll(): Promise<IApartment[] | null> {
    return this.apartmentService.findAll();
  }

  @ApiOperation({
    operationId: 'findOneApartment',
    summary: '— Получение информации о площади',
  })
  @ApiOkResponse({ type: Apartment })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<IApartment | null> {
    return this.apartmentService.findOne(+id);
  }

  @ApiOperation({
    operationId: 'updateApartment',
    summary: '— Обновление информации о площади',
  })
  @ApiOkResponse({ type: Apartment })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestDto: UpdateApartmentDto,
  ): Promise<IApartment | null> {
    return this.apartmentService.update(+id, updateTestDto);
  }

  @ApiOperation({
    operationId: 'removeApartment',
    summary: '— Удаление площади',
  })
  @ApiOkResponse({ description: 'Deleted' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentService.remove(+id);
  }
}
