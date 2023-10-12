import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//   ☝ Create operation
export const POST = async (req, res) => {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const result = await prisma.post_meta.create({
      data: {
        email: "limu@gmail.com",
        firstName: "limu",
        middleName: "chandro",
        lastName: "roy",
        intro: "User",
        mobile: "1237191231273",
        passwordHash: "123123fdnsoijf",
        intro: "news",
        profile: "facebook.com",
        post: {
          create: {
            content: "This is my first post",
            metaTitle: "This is my first post",
            slug: "first-post",
            published: true,
            summary: "This is my first post",
            title: "This is my first post",
            // post meta
            post_meta: {
              create: [
                {
                  key: "This is first post and key is 1",
                  content:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum cupiditate earum eius error est eum expedita fuga id ipsum",
                },
              ],
            },
          },
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
      data: error.message,
    });
  }
};

//   ☝ Read operation
export const GET = async () => {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.post_meta.findMany({});
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
    const result = await prisma.post_meta.update({
      where: {
        id: id,
      },
      data: {
        key: "This is update key",
        content: "This is update content",
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
    const result = await prisma.post_meta.delete({
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
