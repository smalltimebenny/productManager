const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
    app.get("/api/all", ProductController.findAllProducts);
    app.post("/api/products", ProductController.makeAProduct);
}