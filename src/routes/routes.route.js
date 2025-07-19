const express = require('express')
const shoesRoute = require('./shoes.route')

const router = express.Router()

router.use(shoesRoute)

module.exports = router
