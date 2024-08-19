import { parseRequestBody } from "@/lib/api/utils";
import prisma from "@/lib/prisma/index";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const parsedBody = await parseRequestBody(req);
    const data = await prisma.product.create({
      data: {
        userId: parseInt(parsedBody.userId),
        name: parsedBody.name,
        shortDescription: parsedBody.shortDescription,
        longDescription: parsedBody.longDescription,
        category: parsedBody.category,
        listingdate: parsedBody.listingdate,
      },
    });
    return NextResponse.json({
      message: "Product created succesfully",
      data: data,
    });
  } catch (err: any) {
    console.log(err);
    throw new Error("Error creating product", err.message);
  }
};
