const Product = require("../models/product.model")

const findAllProducts = (req, res) => {
    Product.find({})
    .then((allTheProducts) => {
        res.json(allTheProducts)
    })
    .catch((err) => res.json({message: "This thing came apart.", error: err}))
}

const makeAProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json({message: "The error is in creation.", error: err}))
}

const findOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports = {
    findAllProducts,
    makeAProduct,
    findOneProduct,
}