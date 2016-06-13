var express = require('express');
var router = express.Router();

router.post("/signup", (req, res) => {
  res.redirect("/");
});

router.post("/signin", (req, res) => {
  res.redirect("/");
});

router.get("/signout", (req, res) => {
  // clear session / cookies
  res.redirect("/");
});

module.exports = router;
