const router = require("express").Router();

const productController = require("../controllers/productController");

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);
