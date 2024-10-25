import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    await prisma.$connect();
    return NextResponse.json({ message: "Database connection successful" }, { status: 200 });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      {
        error: "Failed to connect to the database",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
