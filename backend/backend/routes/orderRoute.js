const express = require('express')
const { newOrder, MyOrders } = require('../controllers/orderController')
const { isAuthenticatedUser } = require('../middleware/auth')
const router = express.Router()


router.route("/order/new").post(isAuthenticatedUser,newOrder)


router.route("/order/me").get(isAuthenticatedUser,MyOrders);




module.exports = router