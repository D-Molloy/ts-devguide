"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get("/", function (req, res) {
    res.send("<h1>HELLO WORLD</h1>");
});
router.get("/login", function (req, res) {
    res.send("\n  <form method=\"POST\">\n    <label for=\"email\">\n      Email\n      <input name=\"email\" placeholder=\"joe@joe.com\" />\n    </label>\n    <br>\n    <br>\n    <label for=\"password\">\n      Password\n      <input name=\"password\" type=\"password\" />\n    </label>\n    <button>Submit</button>\n  </form>");
});
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    // type guard
    if (email && password) {
        res.send({ email: email.toUpperCase(), password: password.toUpperCase() });
    }
    else {
        res.send("You must provide an email");
    }
});
