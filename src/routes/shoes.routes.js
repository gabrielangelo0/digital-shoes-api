import { PrismaClient } from "../../generated/prisma/index.js";
import express from "express";
import { getAllShoes } from "../controllers/shoesControllers.js";

const router = express.Router();
const prisma = new PrismaClient();

// Traz todos os sapatos
router.get("/shoes", async (req, res) => getAllShoes(req, res));

// Traz um sapato específico pelo Id
router.get("/shoes/:id", async (req, res) => {});

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
