const mongoose =require('mongoose');

const ProductSchema = new mongoose.ProductSchema({
    name:String,
    price:Number,

})

mongoose.model('products' ,ProductSchema);