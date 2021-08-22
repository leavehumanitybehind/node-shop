const path = require('path');
const express = require("express");
const adminController = require("../controllers/products");
const router = express.Router();


router.get("/add-product", adminController.getAddProduct);
router.get("/edit-product/:productId", adminController.getEditProduct);
router.get("/products", adminController.getAdminProducts);
router.post("/add-product", adminController.createNewProduct);
router.post("/edit-product", adminController.editExistingProduct);
router.post("/delete-product", adminController.deleteExistingProduct);


module.exports = router;

