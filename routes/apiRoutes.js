var db = require("../models");

module.exports = function(app) {
  app.get("/api/provider/:id", function(req, res) {
    db.providers.findOne({ where: { id: req.params.id } }).then(function(dbProvider) {
      // var busHours = JSON.parse(dbProvider.businessHours);
      // console.log(dbProvider.businessHours);
      res.json(dbProvider);
    });
  });

  app.get("/api/providers", function(req, res) {
    db.providers.findAll().then(function(dbProviders) {
      res.json(dbProviders);
    });
  });

  app.get("/api/clients", function(req, res) {
    db.clients.findAll().then(function(dbClients) {
      res.json(dbClients);
    });
  });

  app.get("/api/events", function(req, res) {
    db.events.findAll({
      include: [db.providers, db.clients]
    }).then(function(dbEvents) {
      // var evt = JSON.parse(dbEvents.event);
      console.log(dbEvents.event);
      res.json(dbEvents);
    });
  });

  // Create a new example
  app.post("/api/provider", function(req, res) {
    db.providers.create(req.body).then(function(dbProvider) {
      res.json(dbProvider);
    });
  });

  app.post("/api/client", function(req, res) {
    db.clients.create(req.body).then(function(dbClient) {
      res.json(dbClient);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
