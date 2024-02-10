/*
  Warnings:

  - You are about to alter the column `emp_contact` on the `Employees` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Employees" ALTER COLUMN "emp_contact" SET DATA TYPE INTEGER;
