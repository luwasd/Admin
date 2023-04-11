const { Product } = require('../models/product.model');

const createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
}

module.exports = { createProduct };