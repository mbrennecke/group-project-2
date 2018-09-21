var db = require("../models");

module.exports = function(app) {
  app.get("/api/provider/:id", function(req, res) {
    db.providers.findOne({
      where: { id: req.params.id }}).then(function(dbProvider) {
      res.json(dbProvider);
    });
  });

  app.get("/api/providers", function(req, res) {
    db.providers.findAll().then(function(dbProviders) {
      return res.json(dbProviders);
    });
  });

  app.get("/api/calendar/:email", function(req, res) {
    console.log("in calendar api call");
    db.providers.findOne({
      where: { providerEmail: req.params.email }
    }).then (function(provider) {
      console.log(provider);
      res.json(provider);
    })
  });
  
  app.get("/api/clients", function(req, res) {
    db.clients.findAll().then(function(dbClients) {
      res.json(dbClients);
    });
  });

  app.get("/api/client/:email", function (req, res) {
    db.clients.findOne({
      where: { clientEmail: req.params.email }
    }).then (function(client) {
      res.json(client);
    })
  })

  app.get("/api/events", function(req, res) {
    db.events.findAll({
      include: [db.providers, db.clients]
    }).then(function(dbEvents) {
      var evt = JSON.parse(dbEvents[0].event);
      console.log(evt);
      res.json(dbEvents);
    });
  });

  app.get("/api/events/:id", function(req, res) {
    db.events.findAll({ where: { providerId: req.params.id } })
    .then(function(events) {
      res.json(events);
    })
  })

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

  app.post("/api/events", function(req, res) {
    db.events.create(req.body).then(function(event){
      res.json(event);
    })
  })
};
