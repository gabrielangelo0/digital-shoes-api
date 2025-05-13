import { PrismaClient } from "../../generated/prisma/index.js";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/shoes", async (req, res) => {
  //   Get All Shoes

  try {
    const allShoes = await prisma.shoes.findMany();

    res.status(200).json(allShoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/shoes", async (req, res) => {
  // Create a new Shoe

  const { name, brand, size, color, price, photo, stock } = req.body;

  await prisma.shoes.create({
    data: {
        name,
        brand,
        size,
        color,
        price,
        photo,
        stock
    }
  });
  
  res.status(201).json({ message: "Shoe created successfully" });
});

export default router;
