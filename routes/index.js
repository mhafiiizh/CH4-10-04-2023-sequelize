const router = require("express").Router();

const Product = require("./productRoutes");

router.use("/api/v1/products", Product);

module.exports = router;
