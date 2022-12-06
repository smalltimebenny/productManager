const Product = require("../models/product.model")

const findAllProducts = (req, res) => {
    Product.find()
    .then((allTheProducts) => {
        res.json({ products: allTheProducts})
    })
    .catch((err) => res.json({message: "This thing came apart.", error: err}))
}

const makeAProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json({message: "The error is in creation.", error: err}))
}

module.exports = {
    findAllProducts,
    makeAProduct,
}