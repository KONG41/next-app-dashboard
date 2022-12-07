import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) {
  // const { user } = res.body
  const users = await prisma.auth.findMany()
  res.status(200).json(users)

}
