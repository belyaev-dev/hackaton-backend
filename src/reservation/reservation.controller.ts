import { CreateReservationDto } from './dto/create-reservation.dto';
import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { ReservationService } from './reservation.service';

@Controller('reservations')
export class ReservationController {
  private logger = new Logger(ReservationController.name);

  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  create(@Body() data: CreateReservationDto) {
    return this.reservationService.create(data);
  }

  @Get()
  findAll() {
    return this.reservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
  //   return this.testService.update(+id, updateTestDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.testService.remove(+id);
  // }
}
