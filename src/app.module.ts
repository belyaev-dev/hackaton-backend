import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { EstateModule } from './estate/estate.module';
import { CounterpartyModule } from './counterparty/counterparty.module';
import { ReservationModule } from './reservation/reservation.module';
import { TaskModule } from './task/task.module';
import { MeterModule } from './meter/meter.module';
import { SensorModule } from './sensor/sensor.module';
import { ApartmentModule } from './apartment/apartment.module';

@Module({
  imports: [
    CompanyModule,
    EstateModule,
    CounterpartyModule,
    ReservationModule,
    TaskModule,
    MeterModule,
    SensorModule,
    ApartmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
