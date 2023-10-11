import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  //   ☝Create operation using Post model
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    reqBody["publishedAt"] = new Date(reqBody["publishedAt"]);
    const result = await prisma.Post.create({
      data: reqBody,
    });
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({
      status: "Failed",
      message: e.message,
    });
  }

  //   ☝ Read operation using User model
  //   try {
  //     const prisma = new PrismaClient();
  //     const result = await prisma.user.findMany();
  //     return NextResponse.json({
  //       status: "success",
  //       data: result,
  //     });
  //   } catch (e) {
  //     return NextResponse.json({
  //       status: "Failed",
  //       message: e.message,
  //     });
  //   }

  //   ☝ Update operation using User model
  // try {
  //   const prisma = new PrismaClient();
  //   const reqBody = await req.json();
  //   const result = await prisma.user.update({
  //     where: {
  //       id: reqBody["id"],
  //     },
  //     data: reqBody,
  //   });
  //   return NextResponse.json({
  //     status: "success",
  //     data: result,
  //   });
  // } catch (e) {
  //   return NextResponse.json({
  //     status: "Failed",
  //     message: e.message,
  //   });
  // }

  //   ☝ Delate operation using User model
  //   try {
  //     const prisma = new PrismaClient();
  //     const result = await prisma.user.delete({
  //       where: {
  //         id: 3,
  //       },
  //     });
  //     return NextResponse.json({
  //       status: "success",
  //       data: result,
  //     });
  //   } catch (e) {
  //     return NextResponse.json({
  //       status: "Failed",
  //       message: e.message,
  //     });
  //   }
}
