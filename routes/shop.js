const path = require('path');
const express = require("express");
const shopController = require("../controllers/shop");
const router = express.Router();

router.get("/", shopController.getProducts);
router.get("/products", shopController.getCatalog);
router.get("/edit-product/:productId", shopController.getProduct);
router.get("/orders", shopController.getOrders);
module.exports = router;
