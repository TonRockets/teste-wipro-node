const mongoose = require('mongoose');
const { Schema } = mongoose;


const MovieSchema = new Schema({
    movieId: {
        type: mongoose.Types.ObjectId,
    },
    nome: String,
    status: String,
    ano: Number
})

module.exports = mongoose.model('Movie', MovieSchema);