import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { EstateModule } from './estate/estate.module';
import { CounterpartyModule } from './counterparty/counterparty.module';
import { ReservationModule } from './reservation/reservation.module';
import { TaskModule } from './task/task.module';
import { MeterModule } from './meter/meter.module';
import { SensorModule } from './sensor/sensor.module';
import { ApartmentModule } from './apartment/apartment.module';
import { CameraModule } from './camera/camera.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/dist'),
    }),
    CompanyModule,
    EstateModule,
    CounterpartyModule,
    ReservationModule,
    TaskModule,
    MeterModule,
    SensorModule,
    ApartmentModule,
    CameraModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
