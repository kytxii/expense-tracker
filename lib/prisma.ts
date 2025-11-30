import { PrismaClient } from "../app/generated/prisma";

const clientOptions: any = {
  log: ["query"],
};

if (process.env.DATABASE_URL) {
  clientOptions.adapter = {
    url: process.env.DATABASE_URL,
  };
}

declare global {
  var prisma: PrismaClient | undefined;
}

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient(clientOptions);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
