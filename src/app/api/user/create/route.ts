import { parseRequestBody } from "@/lib/api/utils";
import prisma from "@/lib/prisma/index";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const parsedBody = await parseRequestBody(req);
  const data = await prisma.user.upsert({
    where: {
      publicKey: parsedBody.publicKey,
    },
    update: {

    },
    create: {
      publicKey: parsedBody.publicKey,
    },
  });
  return NextResponse.json({
    message: "User created succesfully",
    data: data,
  });
}
