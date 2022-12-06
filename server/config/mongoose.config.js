const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Made database connection."))
    .catch(err => console.log("Something went wrong.", err))