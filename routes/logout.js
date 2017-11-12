const express = require("express");
const logout = express.Router();

logout.get("/",function(req,res,next) {
  if (req.session.username) {
    req.session.destroy()
  }
  return res.json({OK:true});
})

module.exports = logout;