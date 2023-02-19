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
import { CompanyService } from './company.service';
import { Company, ICompany } from './company.types';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@ApiTags('Компании')
@Controller('company')
export class CompanyController {
  private logger = new Logger(CompanyController.name);

  constructor(private readonly companyService: CompanyService) {}

  @ApiOperation({
    operationId: 'createCompany',
    summary: '— Создание контрагента',
  })
  @ApiCreatedResponse({ type: Company })
  @Post()
  create(@Body() data: CreateCompanyDto): Promise<ICompany> {
    return this.companyService.create(data);
  }

  @ApiOperation({
    operationId: 'findAllCounterparties',
    summary: '— Получить список всех контрагентов',
  })
  @ApiOkResponse({ type: Company, isArray: true })
  @Get()
  findAll(): Promise<ICompany[] | null> {
    return this.companyService.findAll();
  }

  @ApiOperation({
    operationId: 'findOneCompany',
    summary: '— Получение информации о контрагенте',
  })
  @ApiOkResponse({ type: Company })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ICompany | null> {
    return this.companyService.findOne(+id);
  }

  @ApiOperation({
    operationId: 'updateCompany',
    summary: '— Обновление информации о контрагенте',
  })
  @ApiOkResponse({ type: Company })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestDto: UpdateCompanyDto,
  ): Promise<ICompany | null> {
    return this.companyService.update(+id, updateTestDto);
  }

  @ApiOperation({
    operationId: 'removeCompany',
    summary: '— Удаление контрагента',
  })
  @ApiOkResponse({ description: 'Deleted' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}
