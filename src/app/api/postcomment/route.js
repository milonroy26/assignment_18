import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//   ☝ Create operation
export const POST = async (req, res) => {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const result = await prisma.user.create({
      data: {
        email: "m@gmail.com",
        firstName: "Mn",
        middleName: "Chandra",
        lastName: "Roy",
        intro: "I am fullstack developer",
        mobile: "2173491273",
        passwordHash: "213123123",
        profile: "google.com",
        // post
        post: {
          create: [
            {
              content: "This is my first post",
              metaTitle: "This is my first post",
              slug: "first-post",
              published: true,
              summary: "This is my first post",
              title: "This is my first post",
              // cratedBy comment
              post_comment: {
                create: [
                  {
                    title: "This is my first post-comment title",
                    published: true,
                    content: "This is my first post-comment content",
                  },
                  {
                    title: "This is my first post-comment title",
                    published: true,
                    content: "This is my first post-comment content",
                  },
                ],
              },
            },
          ],
        },
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

//   ☝ Read operation
export const GET = async () => {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.post_comment.findMany({});
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
    const result = await prisma.post_comment.update({
      where: {
        id: id,
      },
      data: {
        title: "Updated Post-Comment Title",
        content: "Updated meta Content",
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
    const result = await prisma.post_comment.delete({
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
