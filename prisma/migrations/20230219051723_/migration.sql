/*
  Warnings:

  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CounterpartyType" AS ENUM ('INDIVIDUAL_ENTREPRENEUR', 'LIMITED_LIABILITY_COMPANY', 'JOINT_STOCK_COMPANY', 'OTHER');

-- CreateEnum
CREATE TYPE "ApartmentType" AS ENUM ('RESEDENTIAL', 'COMMERCIAL');

-- CreateEnum
CREATE TYPE "SensorType" AS ENUM ('DOOR', 'WINDOW', 'TEMPERATURE', 'HUMIDITY', 'OCCUPANCY', 'MOTION', 'WATER_LEAK', 'CO2', 'FIRE_SMOKE', 'ACCESS_CONTROL', 'ELEVATOR', 'NOISE');

-- CreateEnum
CREATE TYPE "MeterType" AS ENUM ('WATER', 'GAS', 'WARMTH', 'ELECTRICITY');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'DONE');

-- DropIndex
DROP INDEX "user_username_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "username";

-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "image" TEXT,
    "registrationDate" TIMESTAMP(6) NOT NULL DEFAULT timezone('UTC'::text, now()),

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "counterparty" (
    "id" SERIAL NOT NULL,
    "type" "CounterpartyType" NOT NULL,
    "name" TEXT NOT NULL,
    "inn" TEXT NOT NULL,
    "ogrn" TEXT,
    "kpp" TEXT,
    "okpo" TEXT,
    "director" TEXT,
    "registration" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "address" TEXT,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "counterparty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "estate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apartment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "apartmentType" "ApartmentType" NOT NULL,
    "estateId" INTEGER NOT NULL,

    CONSTRAINT "apartment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservation" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "counterpartyId" INTEGER NOT NULL,
    "apartmentId" INTEGER NOT NULL,

    CONSTRAINT "reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sensor" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "SensorType" NOT NULL,
    "estateId" INTEGER NOT NULL,
    "apartmentId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sensor-reading" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "sensorId" INTEGER,

    CONSTRAINT "sensor-reading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meter" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "type" "MeterType" NOT NULL,
    "estateId" INTEGER NOT NULL,
    "apartmentId" INTEGER,

    CONSTRAINT "meter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meter-reading" (
    "id" SERIAL NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "meterId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "meter-reading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Camera" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "estateId" INTEGER NOT NULL,
    "apartmentId" INTEGER,

    CONSTRAINT "Camera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "status" "TaskStatus" NOT NULL DEFAULT 'OPEN',
    "description" TEXT,
    "creationDate" TIMESTAMP(6) NOT NULL DEFAULT timezone('UTC'::text, now()),
    "estateId" INTEGER,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_email_key" ON "company"("email");

-- CreateIndex
CREATE UNIQUE INDEX "counterparty_inn_key" ON "counterparty"("inn");

-- CreateIndex
CREATE UNIQUE INDEX "sensor_uuid_key" ON "sensor"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "meter_uuid_key" ON "meter"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Camera_uuid_key" ON "Camera"("uuid");

-- AddForeignKey
ALTER TABLE "estate" ADD CONSTRAINT "estate_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apartment" ADD CONSTRAINT "apartment_estateId_fkey" FOREIGN KEY ("estateId") REFERENCES "estate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES "counterparty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "apartment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sensor" ADD CONSTRAINT "sensor_estateId_fkey" FOREIGN KEY ("estateId") REFERENCES "estate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sensor" ADD CONSTRAINT "sensor_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "apartment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sensor-reading" ADD CONSTRAINT "sensor-reading_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "sensor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meter" ADD CONSTRAINT "meter_estateId_fkey" FOREIGN KEY ("estateId") REFERENCES "estate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meter" ADD CONSTRAINT "meter_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "apartment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meter-reading" ADD CONSTRAINT "meter-reading_meterId_fkey" FOREIGN KEY ("meterId") REFERENCES "meter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Camera" ADD CONSTRAINT "Camera_estateId_fkey" FOREIGN KEY ("estateId") REFERENCES "estate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Camera" ADD CONSTRAINT "Camera_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "apartment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_estateId_fkey" FOREIGN KEY ("estateId") REFERENCES "estate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
