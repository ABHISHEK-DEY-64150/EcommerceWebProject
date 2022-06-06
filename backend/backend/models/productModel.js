const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter product names'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'please enter product description']
    },
    price: {
        type: Number,
        required: [true, 'please enter product price'],
        maxLength: [8, 'price cannot exceed 8 characters']
    },
    reting: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }

    ],

    category: {
        type: String,
        required: [true, 'Please enter product category']
    },

    stock: {
        type: Number,
        required: [true, 'please enter product stock'],
        maxlength: [4, 'stock cannot exceed 4 characters'],
        default: 1
    },
    noOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {


            name: {
                type: String,
                required: true,
            },
            reting: {
                type: Number,
                required: true
            },
            comment:{
                type:String,
                required:true
            }

        }
    ],

    user:{
      type:mongoose.Schema.ObjectId,
      ref:"User",
      required:true,
    },


    createdAt:{
        type:Date,
        default:Date.now
    }


})

module.exports = mongoose.model("Product",productSchema)