const Order = require('../models/oderModel')
const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorhander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')



//create new order

exports.newOrder = catchAsyncErrors(async(req,res,next)=>{
    const {
     shippingInfo,
     orderItems,
     paymentInfo,
     itemsPrice,
     taxPrice,
     shippingPrice,
     totalPrice,
    }= req.body

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt:Date.now,
        user:req.user._id,
    })
    res.status(200).json({
        success:true,
        order,

    })
})

//get orders for a logged in user

exports.MyOrders = catchAsyncErrors(async(req,res,next)=>{
    const orders = await Order.find({user: req.user._id})

    res.status(200).json({
        success:true,
        orders 
    })

})