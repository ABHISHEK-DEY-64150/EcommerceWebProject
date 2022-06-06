const express = require('express')
const { getALLProducts , createProduct ,updateProduct, deleteProduct, getSingleProductDetails } = require('../controllers/productController')
const { isAuthenticatedUser,authorizeRole } = require('../middleware/auth')

const router = express.Router()

//Letting a user access all products view if authenticated
router.route("/products").get(getALLProducts)

router.route("/api/v1/products/new").post(isAuthenticatedUser,authorizeRole("admin"),createProduct)

router.route("/product/:id").put(isAuthenticatedUser,authorizeRole("admin"),updateProduct).delete(isAuthenticatedUser,authorizeRole("admin"),deleteProduct).get(getSingleProductDetails)


module.exports = router

 