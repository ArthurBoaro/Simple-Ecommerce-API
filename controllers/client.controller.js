const Client = require("../models/client.model");

// Create Client
exports.client_create = (req, res, next) => {
  const client = new Client({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    CPF: req.body.CPF,
    CEP: req.body.CEP,
    address: req.body.address,
    email: req.body.email,
    order: req.body.order,
    description: req.body.description,
  });

  client.save((err) => {
    if (err) {
      return next(err);
    }
    res.send("Client created successfully!");
  });
};

// Get All Clients
exports.all_clients = (req, res, next) => {
    Client.find({}, (err, client) => {
      if (err) return next(err);
      res.json(client);
    });
  };

// Get Client by phoneNumber
exports.client_details = (req, res, next) => {
    Client.findOne(req.params, (err, client) => {
      if (err) return next(err);
      res.send(client);
    });
  };

  // Update Client
  exports.client_update = (req, res, next) => {
    Client.findOneAndUpdate(req.params, { $set: req.body }, (err, client) => {
      if (err) return next(err);
      res.send("Client Updated.");
    });
  };

  // Delete Client
  exports.client_delete = (req, res, next) => {
    Client.findOneAndDelete(req.params, (err) => {
      if (err) return next(err);
      res.send("Client Deleted");
    });
  };