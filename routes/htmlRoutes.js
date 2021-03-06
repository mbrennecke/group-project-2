// Access database
var db = require("../models");
var verifyToken = require('../public/js/verifyToken.js');

module.exports = function(app) {

  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });
  // app.get("/clients", function(req, res) {
  // res.render("clients");
  // });

  // Load example page and pass in an example by id
  app.get("/providers", verifyToken, function(req, res) {
    console.log(req);
    res.render("providers");
  });

  app.get("/provider/:id", verifyToken, function(req, res) {
    console.log(req);
    var id = { id: req.params.id };
    res.render("provider", id);
  })

  // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });
};
