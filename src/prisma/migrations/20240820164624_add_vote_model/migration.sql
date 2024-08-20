/*
  Warnings:

  - You are about to drop the column `votes` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "votes",
ADD COLUMN     "vote" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vote_userId_productId_key" ON "Vote"("userId", "productId");
