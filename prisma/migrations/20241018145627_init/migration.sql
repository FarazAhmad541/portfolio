/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Article` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Article_slug_key";

-- CreateIndex
CREATE UNIQUE INDEX "Article_id_key" ON "Article"("id");
