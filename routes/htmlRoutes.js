// Access database
var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
    });
  });

  // Load Provider page and pass in an example by id
  app.get("/:provider", function (req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("provider", {
        // example: dbExample
      });
    // });
  });

  //  Load Client page
  app.get("/provider/:provider", function (req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {   //edit "example"
        // example: dbExample
      });
    // });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
