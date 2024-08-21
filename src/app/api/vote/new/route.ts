import { parseRequestBody } from "@/lib/api/utils";
import prisma from "@/lib/prisma/index";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const parsedBody: any = await parseRequestBody(req);
    const existingVote = await prisma.vote.findUnique({
      where: {
        userId_productId: {
          userId: parsedBody.userId,
          productId: parsedBody.productId,
        },
      },
    });

    if (existingVote) {
      throw new Error("User has already voted for this product.");
    }

    // Create a new vote
    await prisma.vote.create({
      data: {
        userId: parsedBody.userId,
        productId: parsedBody.productId,
      },
    });

    // Increment the vote count for the product
    const response = await prisma.product.update({
      where: { id: parsedBody.productId },
      data: {
        vote: {
          increment: 1,
        },
      },
      include: {
        votes: true,
      },
    });
    return NextResponse.json({
      message: "Vote added succesfully",
      data: response,
    });
  } catch (err: any) {
    console.log(err);
    throw new Error("Error creating product", err.message);
  }
}
