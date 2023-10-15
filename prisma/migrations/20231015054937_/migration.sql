-- CreateTable
CREATE TABLE "ChallengeConfigMain" (
    "id" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "leaderboard" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChallengeConfigMain_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ChallengeConfigMain_id_key" ON "ChallengeConfigMain"("id");
