const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// Create Client Structure
const ClientSchema = new Schema ({
    name: {type: String, required: true, max: 100},
    phoneNumber: {type: Number, required: true},
    CPF: {type: Number},
    CEP: {type: Number},
    address: {type: String},
    email: {type: String},
    order: {},
    description: {type: String}
});
module.exports = mongoose.model("Client", ClientSchema);
