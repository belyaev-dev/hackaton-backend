import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { ObjectModule } from './object/object.module';
import { CounterpartyModule } from './counterparty/counterparty.module';
import { ReservationModule } from './reservation/reservation.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    UserModule,
    CompanyModule,
    ObjectModule,
    CounterpartyModule,
    ReservationModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
