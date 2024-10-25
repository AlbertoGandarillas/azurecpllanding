import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    await prisma.$connect();
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
