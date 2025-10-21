/*
  Warnings:

  - You are about to drop the column `supervisorsId` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Event` table. All the data in the column will be lost.
  - The primary key for the `Parent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `subjectId` on the `Teacher` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Subject` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Class" DROP CONSTRAINT "Class_supervisorsId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Student" DROP CONSTRAINT "Student_parentId_fkey";

-- AlterTable
ALTER TABLE "Assignment" ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "supervisorsId",
ADD COLUMN     "supervisorId" TEXT;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
CREATE SEQUENCE grade_id_seq;
ALTER TABLE "Grade" ALTER COLUMN "id" SET DEFAULT nextval('grade_id_seq');
ALTER SEQUENCE grade_id_seq OWNED BY "Grade"."id";

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Parent" DROP CONSTRAINT "Parent_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Parent_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Parent_id_seq";

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "img" DROP NOT NULL,
ALTER COLUMN "parentId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "subjectId",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "img" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Subject_name_key" ON "Subject"("name");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
