const path = require('path');
const express = require("express");
const cartController = require("../controllers/cart");
const router = express.Router();

router.post('/cart', cartController.postCart)
router.post('/delete-from-cart', cartController.deleteProductFromCart)
router.get("/cart", cartController.getCart);


module.exports = router;
