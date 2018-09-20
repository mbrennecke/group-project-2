// Access database
var db = require("../models");

module.exports = function (app) {
  // Load index page

  app.get("/", function(req, res) {
      res.render("index");
  });
  
    // app.get("/clients", function(req, res) {
      // res.render("clients");
  // });

  // Load example page and pass in an example by id
  app.get("/providers", verifyToken, function(req, res, next) {
      res.render("providers");
  });

  app.get("/provider/:id", verifyToken, function(req, res, next) {
    var id = { id: req.params.id };   
    res.render("provider", id);
  })

  // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });
};
