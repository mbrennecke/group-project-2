var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/config.js');
var db = require("../models");
var verifyToken = require('../public/js/verifyToken.js');

module.exports = function (app) {
    app.post('/auth/register', function (req, res) {

        var hashedPassword = bcrypt.hashSync(req.body.password, 8);

        db.logins.create({
            loginFirstName: req.body.firstname,
            loginLastName: req.body.lastname,
            loginEmail: req.body.email,
            loginPassword: hashedPassword
        }).then(function (logins, err) {
            console.log(logins.dataValues.id)
            if (err) return res.status(500).send("There was a problem registering the user.")
            // create a token
            var token = jwt.sign({ id: logins.dataValues.id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        });
    });

    app.post('/auth/login', function (req, res) {
        db.logins.findOne({ where: { loginEmail: req.body.email } }).then(function (logins, err) {
            if (err) return res.status(500).send('Error on the server.');
            if (!logins) return res.status(404).send({auth: false});
            console.log(logins);
            var passwordIsValid = bcrypt.compareSync(req.body.password, logins.dataValues.loginPassword);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
            var token = jwt.sign({ id: logins.dataValues.id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        });
    });

    app.get('/auth/logout', function (req, res) {
        res.status(200).send({ auth: false, token: null });
    });

    app.get('/auth/check', verifyToken, function (req, res, next) {

        db.logins.findOne({ where: { id: req.loginsId } })
            .then(function (logins, err) {
                if (err) return res.status(500).send("There was a problem finding the user.");
                if (!logins) return res.status(404).send("No user found.");
                // res.status(200).send(user); Comment this out!
                res.status(200).send(logins.dataValues);
                console.log(logins.dataValues);
            });
    });

}