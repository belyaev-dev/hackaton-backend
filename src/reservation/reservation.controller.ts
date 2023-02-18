import { CreateReservationDto } from './dto/create-reservation.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReservationService } from './reservation.service';

@Controller('company/:companyId/object/:objectId/reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  create(
    @Param('companyId') companyId: number,
    @Param('objectId') objectId: number,
    @Body() createTestDto: CreateReservationDto,
  ) {
    return this.reservationService.create(companyId, objectId, createTestDto);
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
