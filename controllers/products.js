const Product = require("../models/product.js");

exports.getAddProduct = (req, res, next) => {
  res.render("edit-product", {
    docTitle: "Add product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("edit-product", {
      product: product,
      docTitle: "Edit product",
      path: "/admin/edit-product",
      editing: editMode,
    });
  });
};

exports.editExistingProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedProduct = new Product(
    prodId,
    req.body.title,
    req.body.description,
    req.body.imageUrl,
    req.body.price
  );
  updatedProduct.save();
  res.redirect('/admin/products')
};

exports.deleteExistingProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/products');
};

exports.createNewProduct = (req, res, next) => {
  const product = new Product(
    null,
    req.body.title,
    req.body.description,
    req.body.imageUrl,
    req.body.price
  );
  product.save();
  res.redirect("/");
};

exports.getAdminProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("admin-products", {
      prods: products,
      docTitle: "Admin Products",
      path: "admin/products",
    });
  });
};
