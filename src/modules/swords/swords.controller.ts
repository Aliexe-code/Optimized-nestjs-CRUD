import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { SwordsService } from './swords.service';
import {
  CreateSwordDto,
  createSwordSchema,
  updateSwordSchema,
} from './schemas/sword.schema';
import { ZodValidationPipe } from 'src/common/Pipes/zod-validation.pipe';

@Controller('swords')
export class SwordsController {
  constructor(private readonly swordsService: SwordsService) {}

  @Post()
  async createSword(
    @Body(new ZodValidationPipe(createSwordSchema))
    createSwordDto: CreateSwordDto,
  ) {
    return this.swordsService.createSword(createSwordDto);
  }

  @Get()
  async findAllSwords() {
    return this.swordsService.findAllSwords();
  }

  @Get(':id')
  async findSwordById(@Param('id') id: string) {
    try {
      return await this.swordsService.findSwordById(id);
    } catch (error) {
      throw new NotFoundException(error, 'Sword not found');
    }
  }

  @Patch(':id')
  async updateSword(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateSwordSchema))
    updateSwordDto: CreateSwordDto,
  ) {
    try {
      return await this.swordsService.updateSword(id, updateSwordDto);
    } catch (error) {
      throw new NotFoundException(error, 'Sword not found');
    }
  }

  @Delete(':id')
  async deleteSword(@Param('id') id: string) {
    try {
      return await this.swordsService.deleteSword(id);
    } catch (error) {
      throw new NotFoundException(error, 'Sword not found');
    }
  }
  @Post('seed')
  async seedSwords(@Query('count') count: string) {
    const swordsCount = parseInt(count, 10) || 50;
    return this.swordsService.seedSwords(swordsCount);
  }
}
