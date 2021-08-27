const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieRentSchema = new Schema({
    rentId: {
        type: mongoose.Types.ObjectId
    },
    customerId: { 
        type: mongoose.Types.ObjectId, 
        ref: 'Customer'
     },
    movieId: { 
        type: mongoose.Types.ObjectId, 
        ref: 'Movie'
    },
    dtLocacao: Date,
    dtDevolucao: Date
})

module.exports = mongoose.model('Rent', MovieRentSchema);