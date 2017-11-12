var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("Session :", req.session);
  console.log("Session Id:", req.session.id)
  console.log("Cookie :", req.cookies.Carp)
  res.send("ok");
});

module.exports = router;
