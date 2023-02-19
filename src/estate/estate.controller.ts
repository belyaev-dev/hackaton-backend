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
import { CreateEstateDto } from './dto/create-estate.dto';
import { UpdateEstateDto } from './dto/update-estate.dto';
import { EstateService } from './estate.service';
import { Estate, IEstate } from './estate.types';

@ApiTags('Недвижимость')
@Controller('estate')
export class EstateController {
  private logger = new Logger(EstateController.name);

  constructor(private readonly estateService: EstateService) {}

  @ApiOperation({
    operationId: 'createEstate',
    summary: '— Создание недвижимости',
  })
  @ApiCreatedResponse({ type: Estate })
  @Post()
  create(@Body() data: CreateEstateDto): Promise<IEstate> {
    return this.estateService.create(data);
  }

  @ApiOperation({
    operationId: 'findAllEstates',
    summary: '— Получить список всех недвижимостей',
  })
  @ApiOkResponse({ type: Estate, isArray: true })
  @Get()
  findAll(): Promise<IEstate[] | null> {
    return this.estateService.findAll();
  }

  @ApiOperation({
    operationId: 'findOneEstate',
    summary: '— Получение информации о недвижимости',
  })
  @ApiOkResponse({ type: Estate })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<IEstate | null> {
    return this.estateService.findOne(+id);
  }

  @ApiOperation({
    operationId: 'updateEstate',
    summary: '— Обновление информации о недвижимости',
  })
  @ApiOkResponse({ type: Estate })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestDto: UpdateEstateDto,
  ): Promise<IEstate | null> {
    return this.estateService.update(+id, updateTestDto);
  }

  @ApiOperation({
    operationId: 'removeEstate',
    summary: '— Удаление недвижимости',
  })
  @ApiOkResponse({ description: 'Deleted' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estateService.remove(+id);
  }
}
