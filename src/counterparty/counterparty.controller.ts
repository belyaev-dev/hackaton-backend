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
import { CounterpartyService } from './counterparty.service';
import { Counterparty, ICounterparty } from './counterparty.types';
import { CreateCounterpartyDto } from './dto/create-counterparty.dto';
import { UpdateCounterpartyDto } from './dto/update-counterparty.dto';

@ApiTags('Контрагенты')
@Controller('counterparty')
export class CounterpartyController {
  private logger = new Logger(CounterpartyController.name);

  constructor(private readonly counterpartyService: CounterpartyService) {}

  @ApiOperation({
    operationId: 'createCounterparty',
    summary: '— Создание недвижимости',
  })
  @ApiCreatedResponse({ type: Counterparty })
  @Post()
  create(@Body() data: CreateCounterpartyDto): Promise<ICounterparty> {
    return this.counterpartyService.create(data);
  }

  @ApiOperation({
    operationId: 'findAllCounterparties',
    summary: '— Получить список всех недвижимостей',
  })
  @ApiOkResponse({ type: Counterparty, isArray: true })
  @Get()
  findAll(): Promise<ICounterparty[] | null> {
    return this.counterpartyService.findAll();
  }

  @ApiOperation({
    operationId: 'findOneCounterparty',
    summary: '— Получение информации о недвижимости',
  })
  @ApiOkResponse({ type: Counterparty })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ICounterparty | null> {
    return this.counterpartyService.findOne(+id);
  }

  @ApiOperation({
    operationId: 'updateCounterparty',
    summary: '— Обновление информации о недвижимости',
  })
  @ApiOkResponse({ type: Counterparty })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestDto: UpdateCounterpartyDto,
  ): Promise<ICounterparty | null> {
    return this.counterpartyService.update(+id, updateTestDto);
  }

  @ApiOperation({
    operationId: 'removeCounterparty',
    summary: '— Удаление недвижимости',
  })
  @ApiOkResponse({ description: 'Deleted' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.counterpartyService.remove(+id);
  }
}
