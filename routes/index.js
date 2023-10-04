const express = require("express");
router = express.Router();

const timeMiddleware = require("../middlewares/requestTime");
const Product = require("./productRoutes");

router.use(timeMiddleware);

router.use("/api/v1/products", Product);

module.exports = router;
