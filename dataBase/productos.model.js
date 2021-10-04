const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_id: Number,
    category: String,
    name: String,
    price: Number,
    image: String,
    stock: Number
})
const ProductsModel = mongoose.model('Productos', ProductSchema)
module.exports = ProductsModel