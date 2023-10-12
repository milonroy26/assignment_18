import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//   ☝ Create operation
export const POST = async (req, res) => {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const postId = +searchParams.get("id");
    const categoryId = +searchParams.get("id");
    const result = await prisma.post_category.create({
      data: {
        postId: postId,
        categoryId: categoryId,
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      data: error.message,
    });
  }
};

//   ☝ Read operation
export const GET = async () => {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.post_category.findMany({});
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      data: error.message,
    });
  }
};

//   ☝ Update operation
export const PUT = async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = +searchParams.get("id");
    const result = await prisma.post_category.update({
      where: {
        id: id,
      },
      data: {
        postId: postId,
        categoryId: categoryId,
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      data: error,
    });
  }
};

//   ☝ Delete operation
export const DELETE = async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = +searchParams.get("id");
    const result = await prisma.post_category.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      data: error,
    });
  }
};
