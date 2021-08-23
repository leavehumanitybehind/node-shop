const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows,filedData]) => {
    res.render("shop", { prods: rows, docTitle: "Shop", path: "/" });
  }).catch(err => console.log(err));
};

exports.getCatalog = (req, res, next) => {
  Product.fetchAll().then(([rows,filedData]) => {
    res.render("catalog", { prods: rows, docTitle: "Catalog", path: "/products" });
  }).catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
    res.render("orders", {  docTitle: "Orders", path: "/orders" });
};


exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then(([product]) => {
    res.render("product-detail", {product: product[0],  docTitle: `${product.title}`, path: `/products` });
  }).catch(err => console.log(err));
    
};
