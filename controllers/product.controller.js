const Product = require("../models/product.model");

// Create Product
exports.product_create = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    productNumber: req.body.productNumber,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    manual: req.body.manual,
    manufacturerWarranty: req.body.manufacturerWarranty,
    extendedWarranty: req.body.extendedWarranty,
    description: req.body.description,
  });

  product.save((err) => {
    if (err) {
      return next(err);
    }
    res.send("Product created successfully!");
  });
};

// Get All Products
exports.all_products = (req, res, next) => {
    Product.find({}, (err, product) => {
      if (err) return next(err);
      res.json(product);
    });
  };

// Get Product by productNumber
exports.product_details = (req, res, next) => {
    Product.findOne(req.params, (err, product) => {
      if (err) return next(err);
      res.send(product);
    });
  };

  // Update Product
  exports.product_update = (req, res, next) => {
    Product.findOneAndUpdate(req.params, { $set: req.body }, (err, product) => {
      if (err) return next(err);
      res.send("Product Updated.");
    });
  };

  // Delete Product
  exports.product_delete = (req, res, next) => {
    Product.findOneAndDelete(req.params, (err) => {
      if (err) return next(err);
      res.send("Product Deleted");
    });
  };