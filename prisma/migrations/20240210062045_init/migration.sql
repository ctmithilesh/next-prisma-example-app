-- CreateTable
CREATE TABLE "Countries" (
    "id" SERIAL NOT NULL,
    "country_name" TEXT NOT NULL,
    "country_flag" TEXT NOT NULL,

    CONSTRAINT "Countries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Countries_id_key" ON "Countries"("id");
