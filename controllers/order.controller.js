const Order = require("../models/order.model");

// Create Order
exports.order_create = (req, res, next) => {
  const order = new Order({
    orderNumber: req.body.orderNumber,
    item: req.body.item,
    orderStatus: req.body.orderStatus,
    shipStatus: req.body.shipStatus,
    shipAddress: req.body.shipAddress,
    tracking: req.body.tracking,
    price: req.body.price,
    paymentMethod: req.body.paymentMethod,
    installments: req.body.installments,
    NF: req.body.NF,
    voucher: req.body.voucher,
    boughtDate: req.body.boughtDate,
    estimatedDate: req.body.estimatedDate,
    description: req.body.description,
  });

  order.save((err) => {
    if (err) {
      return next(err);
    }
    res.send("Order created successfully!");
  });
};

// Get All Orders
exports.all_orders = (req, res, next) => {
    Order.find({}, (err, order) => {
      if (err) return next(err);
      res.json(order);
    });
  };

// Get Order by orderNumber
exports.order_details = (req, res, next) => {
    Order.findOne(req.params, (err, order) => {
      if (err) return next(err);
      res.send(order);
    });
  };

  // Update Order
  exports.order_update = (req, res, next) => {
    Order.findOneAndUpdate(req.params, { $set: req.body }, (err, order) => {
      if (err) return next(err);
      res.send("Order Updated.");
    });
  };

  // Delete Order
  exports.order_delete = (req, res, next) => {
    Order.findOneAndDelete(req.params, (err) => {
      if (err) return next(err);
      res.send("Order Deleted");
    });
  };