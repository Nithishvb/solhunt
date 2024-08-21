import { parseRequestBody } from "@/lib/api/utils";
import prisma from "@/lib/prisma/index";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const parsedBody = await parseRequestBody(req);

    console.log(parsedBody)

    await prisma.vote.delete({
      where: {
        id: parsedBody.voteId
      }
    });

    const response = await prisma.product.update({
      where: { id: parsedBody.productId },
      data: {
        vote: {
          decrement: 1,
        },
      },
      include: {
        votes: true,
      },
    });
    return NextResponse.json({
      message: "Vote removed succesfully",
      data: response,
    });
  } catch (err: any) {
    console.log(err);
    throw new Error("Error creating product", err.message);
  }
}
