// Access database
var db = require("../models");

module.exports = function (app) {
  // Load index page

  //  Load Client page
  app.get("/provider/:provider", function (req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {   //edit "example"
        // example: dbExample
      });
    // });

  app.get("/", function(req, res) {
      res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/providers", function(req, res) {
      res.render("providers");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
