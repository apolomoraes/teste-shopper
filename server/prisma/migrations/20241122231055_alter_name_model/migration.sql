/*
Warnings:
- You are about to drop the `driver` table. If the table is not empty, all the data it contains will be lost.
*/
-- DropTable
DROP TABLE "driver";

-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "car" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "ratingDescription" TEXT NOT NULL,
    "ratePerKm" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "minimumKm" INTEGER NOT NULL,


CONSTRAINT "Driver_pkey" PRIMARY KEY ("id") );