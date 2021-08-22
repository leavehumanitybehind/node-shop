const Product = require("../models/product");
const Cart = require("../models/cart");
exports.getCart = (req, res, next) => {
  Cart.getCartProducts((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      for (product of products) {
        const cartProductDAta = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductDAta) {
          cartProducts.push({ productData: product, qty: cartProductDAta.qty });
        }
      }
      res.render("cart", {
        docTitle: "Cart",
        path: "/cart",
        products: cartProducts,
        cart: cart
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

exports.deleteProductFromCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect("/cart");
  });
};
