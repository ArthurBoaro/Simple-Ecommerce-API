const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// Create Product Structure
const ProductSchema = new Schema ({
    name: {type: String, required: true},
    productNumber: {type: Number, required: true},
    price: {type: Number, required:true},
    color: {type: String},
    size: {type: String},
    manual: {type: String},
    manufacturerWarranty: {type: String},
    extendedWarranty: {type: String},
    description: {type: String}
});
module.exports = mongoose.model("Product", ProductSchema);
