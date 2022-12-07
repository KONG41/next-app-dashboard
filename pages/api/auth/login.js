import { sign } from "jsonwebtoken"
import { serialize } from "cookie"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
const secret = process.env.SECRET;

export default async function handler(req, res) {
  const { username, password } = req.body;
  // const users = await prisma.auth.findMany(
  //   {
  //     where: {
  //       user: username
  //     }
  //   }
  // )
  // res.status(200).json(users)

  if (username === "admin" && password === "123") {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        username: username,
      },
      secret
    );

    const serialised = serialize("app_cookie_login", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Success!" });
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}