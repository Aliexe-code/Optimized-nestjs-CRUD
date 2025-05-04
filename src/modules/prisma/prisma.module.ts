import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [],
  providers: [PrismaService],
  //!make sure to export prisma service to use it in swords module
  exports: [PrismaService],
})
export class PrismaModule {}
