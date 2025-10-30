-- AlterTable
ALTER TABLE "Quotes" ADD COLUMN     "authorId" TEXT;

-- AddForeignKey
ALTER TABLE "Quotes" ADD CONSTRAINT "Quotes_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
