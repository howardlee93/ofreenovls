/*
  Warnings:

  - You are about to drop the column `content` on the `Work` table. All the data in the column will be lost.
  - You are about to drop the column `subjectId` on the `Work` table. All the data in the column will be lost.
  - Added the required column `rating` to the `Work` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warning` to the `Work` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_subjectId_fkey";

-- AlterTable
ALTER TABLE "Chapter" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "summary" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Work" DROP COLUMN "content",
DROP COLUMN "subjectId",
ADD COLUMN     "rating" TEXT NOT NULL,
ADD COLUMN     "warning" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SubjectToWork" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TagToWork" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_SubjectToWork_AB_unique" ON "_SubjectToWork"("A", "B");

-- CreateIndex
CREATE INDEX "_SubjectToWork_B_index" ON "_SubjectToWork"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToWork_AB_unique" ON "_TagToWork"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToWork_B_index" ON "_TagToWork"("B");

-- AddForeignKey
ALTER TABLE "_SubjectToWork" ADD CONSTRAINT "_SubjectToWork_A_fkey" FOREIGN KEY ("A") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubjectToWork" ADD CONSTRAINT "_SubjectToWork_B_fkey" FOREIGN KEY ("B") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToWork" ADD CONSTRAINT "_TagToWork_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToWork" ADD CONSTRAINT "_TagToWork_B_fkey" FOREIGN KEY ("B") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;
