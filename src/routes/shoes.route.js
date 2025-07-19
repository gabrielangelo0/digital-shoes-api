const express = require('express');
const { createShoes, getAllShoes } = require('../controllers/shoes.controller');

const router = express.Router();

router.post('/shoes', createShoes)
router.get('/shoes', getAllShoes)

module.exports = router;
