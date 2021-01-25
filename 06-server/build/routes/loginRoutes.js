"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
// custom auth middleware
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn === true) {
        next();
        // returning on a new line so its clear that nothing is returned
        return;
    }
    res.status(403).send("Not permitted");
}
router.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n    <div>\n      <h1>You are now logged in, " + req.session.email + "</h1>\n      <a href=\"/protected\">Protected Page For Cool People</a>\n      <a href=\"/logout\">Logout</a>\n    </div>");
    }
    else {
        res.send("\n    <div>\n      <h1>You are not logged in</h1>\n      <a href=\"/login\">Login</a>\n    </div>");
    }
});
router.get("/login", function (req, res) {
    res.send("\n  <form method=\"POST\">\n    <label for=\"email\">\n      Email\n      <input name=\"email\" placeholder=\"joe@joe.com\" />\n    </label>\n    <br>\n    <br>\n    <label for=\"password\">\n      Password\n      <input name=\"password\" type=\"password\" />\n    </label>\n    <button>Submit</button>\n  </form>");
});
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    // type guard
    if (email && password && email === "denis@denis.com" && password === "password") {
        //mark the user as logged in
        req.session = { loggedIn: true, email: email };
        //redirect them to the root route
        res.redirect("/");
    }
    else {
        res.send("Invalid Credentials");
    }
});
router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/login");
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("\n  <div>\n    <h1>Welcome to Protected Route</h1>\n    <a href=\"/logout\">Logout</a>\n  </div>");
});
