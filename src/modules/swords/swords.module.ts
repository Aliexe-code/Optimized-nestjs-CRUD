import { Module } from '@nestjs/common';
import { SwordsService } from './swords.service';
import { SwordsController } from './swords.controller';
import { PrismaModule } from '../prisma/prisma.module';
@Module({
  //! import prisma module to use prisma service (DI)
  imports: [PrismaModule],
  controllers: [SwordsController],
  providers: [SwordsService],
})
export class SwordsModule {}
