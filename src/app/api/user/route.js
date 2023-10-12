import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const result = await prisma.user.createMany({
      data: [
        {
          email: "milon@gmail.com",
          firstName: "milon",
          middleName: "chandro",
          lastName: "roy",
          intro: "User",
          mobile: "1237191231273",
          passwordHash: "123123fdnsoijf",
          intro: "news",
          profile: "facebook.com",
        },
        {
          email: "santo@gmail.com",
          firstName: "santo",
          middleName: "chandro",
          lastName: "roy",
          intro: "User",
          mobile: "1237191231273",
          passwordHash: "123123fdnsoijf",
          intro: "news",
          profile: "facebook.com",
        },
      ],
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

export const GET = async () => {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.user.findMany({});
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

export const PUT = async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = +searchParams.get("id");
    const result = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        firstName: "updatedName",
        email: "updatedmail@gmail.com",
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

export const DELETE = async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = +searchParams.get("id");
    const result = await prisma.user.delete({
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
