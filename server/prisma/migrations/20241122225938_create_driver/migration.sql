-- CreateTable
CREATE TABLE "driver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "car" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "ratingDescription" TEXT NOT NULL,
    "ratePerKm" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "minimumKm" INTEGER NOT NULL,


CONSTRAINT "driver_pkey" PRIMARY KEY ("id") );