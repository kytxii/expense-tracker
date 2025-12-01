import { PrismaClient } from "../app/generated/prisma";
import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import ws from "ws";

const clientOptions: any = {
  log: ["query"],
};

if (process.env.DATABASE_URL) {
  neonConfig.webSocketConstructor = ws;
  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL,
  });
  clientOptions.adapter = adapter;
}

declare global {
  var prisma: PrismaClient | undefined;
}

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient(clientOptions);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
