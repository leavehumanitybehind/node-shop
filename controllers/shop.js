const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
  });
};

exports.getCatalog = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("catalog", { prods: products, docTitle: "Catalog", path: "/products" });
  });
};

exports.getOrders = (req, res, next) => {
    res.render("orders", {  docTitle: "Orders", path: "/orders" });
};


exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(Product.findById(prodId, product => {
    res.render("product-detail", {product: product,  docTitle: `${product.title}`, path: `/products/${prodId}` });
  }));
};
