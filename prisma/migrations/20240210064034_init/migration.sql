-- CreateTable
CREATE TABLE "Employees" (
    "id" SERIAL NOT NULL,
    "emp_name" TEXT NOT NULL,
    "emp_designation" TEXT NOT NULL,
    "emp_address" TEXT NOT NULL,
    "emp_contact" BIGINT NOT NULL,

    CONSTRAINT "Employees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employees_id_key" ON "Employees"("id");
