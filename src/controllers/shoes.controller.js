const { PrismaClient } = require('../../generated/prisma')

const prisma = new PrismaClient()

const createShoes = async (req, res) => {
  const { name, brand, price, size, color, imageUrl, inStock } = req.body;

  const shoes = await prisma.shoes.create({
    data: {
      name,
      brand,
      price,
      size,
      color,
      imageUrl,
      inStock
    }
  })

  res.status(201).json(shoes)
}

const getAllShoes = async (req, res) => {
  const shoes = await prisma.shoes.findMany()

  res.status(200).json(shoes)
}

const deleteShoes = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.shoes.delete({
      where: { id }
    })

    res.status(204).send('Sapato deletado com sucesso!')
  } catch (error) {
    console.error('Error deleting shoe:', error)
    return res.status(500).send('Erro ao deletar sapato.')
  }
}

const updateShoes = async (req, res) => {
  const { id } = req.params;

  const { name, brand, price, size, color, imageUrl, inStock } = req.body;

  try {
    await prisma.shoes.update({
      where: { id },
      data: {
        name,
        brand,
        price,
        size,
        color,
        imageUrl,
        inStock
      }
    })

    res.status(200).send('Sapato atualizado com sucesso!')
  } catch (error) {
    console.error('Error updating shoe:', error)
    return res.status(500).send('Erro ao atualizar sapato.')
  }
}

const getShoes = async (req, res) => {
  const { id } = req.params;

  try {
    const shoes = await prisma.shoes.findUnique({
      where: { id }
    })

    res.status(200).json(shoes)
  } catch (error) {
    console.error('Error fetching shoe:', error)
    return res.status(500).send('Erro ao buscar sapato.')
  }
}

module.exports = {
  createShoes,
  getAllShoes,
  getShoes,
  deleteShoes,
  updateShoes
}