const mongoose = require('mongoose');

const movieScheme = new mongoose.Schema({
    name: String,
    genre: String, 
    year: Number,
    starring: [String],
}, {timestamps: true}); //updatedAt და createdAt

module.exports = mongoose.model('kinoebi', movieScheme);