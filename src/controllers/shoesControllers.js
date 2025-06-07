import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

async function getAllShoes(req, res) {
  try {
    const allShoes = await prisma.shoes.findMany();

    res.status(200).json(allShoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { getAllShoes };
