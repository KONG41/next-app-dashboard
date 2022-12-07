import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, name, email, phone } = req.body
    const user = await prisma.contact.update({
      where: {
        id
      },
      data: {
        name,
        email,
        phone
      }
    })
    res.status(200).json(user)
  }
}