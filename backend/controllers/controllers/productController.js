const Product = require('../models/productModel')

const ErrorHandler = require('../utils/errorhander')

const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ApiFeatures = require('../utils/apifeatures')

//create product -- Only Admin

exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    //To keep track who created the product

    req.body.user = req.user.id    


    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
})

//Get all the products
exports.getALLProducts = catchAsyncErrors(async (req, res, next) => {

    const ProductCount = await Product.countDocuments()

   const resultPerPage = 10; 
   const apifeatures = new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage)
    //const products = await Product.find()
    const products = await apifeatures.query  // bcause the class returns all the products along with keywords.
    res.status(200).json({
        message: "Below are all the products",
        success: true,
        products,
        ProductCount
    })

}
)
//Get single product details

exports.getSingleProductDetails = catchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        message: "Product details is below",
        success: true,
        product
    })


})


//upadte product by product id -- Admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        message: "Product is updated",
        success: true,
        product
    })

})

//delete product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    await product.remove()

    res.status(200).json({
        message: "Product is deleted successfully",
        success: true,
    })

}
)
