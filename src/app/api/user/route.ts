import prisma from "@/lib/prisma/index";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.user.findMany();
  return NextResponse.json({
    message: "User data fetched succesfully",
    data: data,
  });
}
