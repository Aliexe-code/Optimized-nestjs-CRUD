-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('COMMON', 'UNCOMMON', 'RARE', 'EPIC', 'LEGENDARY');

-- CreateTable
CREATE TABLE "swords" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "damage" INTEGER NOT NULL,
    "rarity" "Rarity" NOT NULL,
    "isMagic" BOOLEAN NOT NULL DEFAULT false,
    "enchantments" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "swords_pkey" PRIMARY KEY ("id")
);
