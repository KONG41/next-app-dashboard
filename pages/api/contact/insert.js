// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone } = req.body
    const user = await prisma.contact.create({
      data: {
        email,
        name,
        phone
      },
    })
    res.status(200).json(user)
  }
}
