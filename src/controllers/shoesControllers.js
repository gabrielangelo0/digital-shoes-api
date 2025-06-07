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

async function getShoeById(req, res) {
  const { id } = req.params;

  try {
    const shoe = await prisma.shoes.findUnique({
      where: { id: id },
    });

    if (!shoe) {
      return res.status(404).json({ error: "Shoe not found" });
    }

    res.status(200).json(shoe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function createShoe(req, res) {
  const { price, name, brand, size, color, photo, stock } = req.body;

  console.log(req.body);

  try {
    if (!name || !brand || !size || !color || !price || !photo || stock === undefined) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await prisma.shoes.create({
      data: {
        name,
        brand,
        size,
        color,
        price,
        photo,
        stock,
      },
    });

    res.status(201).json({ message: "Shoe created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updateShoe(req, res) {
    const { id } = req.params;
    const { price, name, brand, size, color, photo, stock } = req.body;

    try {
        if (!name || !brand || !size || !color || !price || !photo || stock === undefined) {
            return res.status(400).json({ error: "All fields are required" });
        }

        await prisma.shoes.update({
            where: { id },
            data: {
                name,
                brand,
                size,
                color,
                price,
                photo,
                stock,
            }
        })

        res.status(200).json({ message: "Shoe updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function deleteShoe(req, res) {
    const { id } = req.params;

    try {
        await prisma.shoes.delete({
            where: { id },
        })

        res.status(200).json({ message: "Shoe deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const shoesControllers = {
  getAllShoes,
  createShoe,
  getShoeById,
  updateShoe,
  deleteShoe,
};
