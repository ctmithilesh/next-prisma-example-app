-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "emp_name" TEXT NOT NULL,
    "emp_address" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_id_key" ON "Employee"("id");
