const mongoose = require('mongoose');
const { Schema } = mongoose;

const CustomerSchema = new Schema({
    clienteId: {
        type: mongoose.Types.ObjectId
    },
    name: String,
    cpf: String
    
})

module.exports = mongoose.model('Customer', CustomerSchema);