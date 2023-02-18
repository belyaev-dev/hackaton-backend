import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { EstateModule } from './estate/estate.module';
import { CounterpartyModule } from './counterparty/counterparty.module';
import { ReservationModule } from './reservation/reservation.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    CompanyModule,
    EstateModule,
    CounterpartyModule,
    ReservationModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
