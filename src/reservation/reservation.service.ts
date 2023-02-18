import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
// import { CompanyService } from 'src/company/company.service';
// import { ObjectService } from 'src/object/object.service';

@Injectable()
export class ReservationService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: any) {
    //do we really need them at this moment? we can get them from object
    // const company = await this.companyService.getCompanyById(companyId);
    // const object = await this.objectService.getObjectById(objectId);
    return 'This action adds a new test';
  }

  findAll() {
    return `This action returns all test`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, data: any) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
