import { PrismaClient } from "../../generated/prisma/index.js";
import express from "express";
import { shoesControllers } from "../controllers/shoesControllers.js";

const router = express.Router();
const prisma = new PrismaClient();

// Traz todos os sapatos
router.get("/shoes", shoesControllers.getAllShoes);

// Traz um sapato específico pelo Id
router.get("/shoes/:id", shoesControllers.getShoeById);

// Cria um novo sapato
router.post("/shoes", shoesControllers.createShoe);

// Atualiza um sapato específico pelo Id
router.put("/shoes/:id", shoesControllers.updateShoe);

// Deleta um sapato específico pelo Id
router.delete("/shoes/:id", shoesControllers.deleteShoe);

export default router;
