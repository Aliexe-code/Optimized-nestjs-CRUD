import { Injectable } from '@nestjs/common';
import { CreateSwordDto } from './schemas/sword.schema';
import { Sword } from './interfaces/sword.interface';
import { PrismaService } from '../prisma/prisma.service';
import { faker } from '@faker-js/faker';
import { Rarity } from '../../generated/prisma';
@Injectable()
export class SwordsService {
  constructor(private readonly prisma: PrismaService) {}

  public async createSword(
    createswordDto: CreateSwordDto,
  ): Promise<{ message: string; sword: Sword }> {
    const newSword = await this.prisma.sword.create({ data: createswordDto });
    return {
      message: 's',
      sword: newSword,
    };
  }

  public async findAllSwords(): Promise<{ message: string; swords: Sword[] }> {
    const swords = await this.prisma.sword.findMany();
    return {
      message: 'swords fetched successfully with count ' + swords.length,
      swords,
    };
  }

  public async findSwordById(id: string): Promise<Sword> {
    const sword = await this.prisma.sword.findUnique({ where: { id } });
    if (!sword) {
      throw new Error(`Sword with id ${id} not found`);
    }
    return sword;
  }

  public async updateSword(
    id: string,
    updateSwordDto: CreateSwordDto,
  ): Promise<{ message: string; sword: Sword }> {
    const updatedSword = await this.prisma.sword.update({
      where: { id },
      data: updateSwordDto,
    });
    return {
      message: 'Sword updated successfully',
      sword: updatedSword,
    };
  }

  public async deleteSword(id: string): Promise<{ message: string }> {
    await this.prisma.sword.delete({ where: { id } });
    return { message: 'Sword deleted successfully' };
  }

  //! seed db with fake data
  public async seedSwords(count: number = 50): Promise<{ message: string }> {
    const swords = Array.from({ length: count }).map(() => ({
      name: faker.word.words(2),
      damage: faker.number.int({ min: 10, max: 100 }),
      rarity: faker.helpers.arrayElement(Object.values(Rarity)),
      isMagic: faker.datatype.boolean(),
      enchantments: faker.helpers.uniqueArray(() => faker.word.words(1), 3),
    }));

    await this.prisma.sword.createMany({
      data: swords,
    });

    return { message: `${count} swords created successfully` };
  }
}
