import prisma from "@/lib/prisma/index";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.product.findMany({
    include: {
      votes: true
    }
  });
  return NextResponse.json({
    message: "Product data fetched succesfully",
    data: data
  });
}