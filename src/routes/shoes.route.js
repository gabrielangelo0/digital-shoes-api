const express = require('express');
const { createShoes, getAllShoes, deleteShoes, updateShoes, getShoes } = require('../controllers/shoes.controller');

const router = express.Router();

router.post('/shoes', createShoes)
router.get('/shoes', getAllShoes)
router.delete('/shoes/:id', deleteShoes)
router.put('/shoes/:id', updateShoes)
router.get('/shoes/:id', getShoes)

module.exports = router;
