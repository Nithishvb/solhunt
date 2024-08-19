/*
  Warnings:

  - Added the required column `listingdate` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "listingdate" TIMESTAMP(3) NOT NULL;
