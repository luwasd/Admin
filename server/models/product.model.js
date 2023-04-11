const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'Title is required'], minlength: [2, 'Title must be at least 2 characters long']},
    price: {type: Number, required: [true, 'Price is required'], min: [0, 'Price must be at least 0']},
    description: {type: String, required: [true, 'Description is required'], minlength: [2, 'Description must be at least 2 characters long']},
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', productSchema);