const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// Create Order Structure
const OrderSchema = new Schema ({
    orderNumber: {type: Number, required: true},
    item: {type: Array, required:true},
    orderStatus: {type: String},
    shipStatus: {type: String},
    shipAddress: {type: String},
    tracking: {type: String},
    price: {type: Number},
    paymentMethod: {type: String},
    installments: {type: String},
    voucher: {type: String},
    boughtDate: {type: Number},
    estimatedDate: {type: Number},
    description: {type: String}
});
module.exports = mongoose.model("Order", OrderSchema);
