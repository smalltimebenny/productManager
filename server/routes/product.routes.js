const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.makeAProduct);
    app.get("/api/products/:id", ProductController.findOneProduct);
}