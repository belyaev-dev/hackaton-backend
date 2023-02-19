import { UpdateReservationDto } from './dto/update-reservation.dto';
import { CreateReservationDto } from './dto/create-reservation.dto';
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
import { ReservationService } from './reservation.service';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { IReservation, Reservation } from './reservation.types';

@ApiTags('Бронирования')
@Controller('reservations')
export class ReservationController {
  private logger = new Logger(ReservationController.name);

  constructor(private readonly reservationService: ReservationService) {}

  @ApiOperation({
    operationId: 'createReservation',
    summary: '— Создание аренды/бронирования',
  })
  @ApiCreatedResponse({ type: Reservation })
  @Post()
  create(@Body() data: CreateReservationDto): Promise<IReservation> {
    return this.reservationService.create(data);
  }

  @ApiOperation({
    operationId: 'findAllReservations',
    summary: '— Получить список всех аренд/бронирований данного обьекта',
  })
  @ApiOkResponse({ type: Reservation, isArray: true })
  @Get()
  findAll(): Promise<IReservation[] | null> {
    return this.reservationService.findAll();
  }

  @ApiOperation({
    operationId: 'findOneReservation',
    summary: '— Получение информации об аренде/бронировании',
  })
  @ApiOkResponse({ type: Reservation })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<IReservation | null> {
    return this.reservationService.findOne(+id);
  }

  @ApiOperation({
    operationId: 'updateReservation',
    summary: '— Обновление информации о бронировании',
  })
  @ApiOkResponse({ type: Reservation })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestDto: UpdateReservationDto,
  ): Promise<IReservation | null> {
    return this.reservationService.update(+id, updateTestDto);
  }

  @ApiOperation({
    operationId: 'removeReservation',
    summary: '— Отмена аренды/бронирования',
  })
  @ApiOkResponse({ description: 'Deleted' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationService.remove(+id);
  }
}
