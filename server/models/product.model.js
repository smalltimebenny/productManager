const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String},
        price: {type: Number},
        descript: {type: String},
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Product", ProductSchema);