import { PrismaClient } from "../generated/prisma/index.js";

// Initialize Prisma client without explicit datasource config
// as it will use the DATABASE_URL from .env file
export const client = new PrismaClient();



