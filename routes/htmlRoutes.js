// Access database
var db = require("../models");

module.exports = function (app) {
  // Load index page

  app.get("/", function(req, res) {
      res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/providers", function(req, res) {
      res.render("providers");
  });

  app.get("/provider/:id", function(req, res) {
    var id = { id: req.params.id };   
    res.render("provider", id);
  })

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
