-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Tokyo',
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMPTZ;
