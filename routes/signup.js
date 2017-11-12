const express = require ('express');
const signup = express.Router();
const { UserModel } =  require ('../models');

signup.post("/",function (req,res,next) {
  const reqjson = req.body;
  console.log("reqjosn",reqjson);
  const adi = new UserModel(reqjson);
  adi.save ((err,doc) => {
    if (err) {
      console.log("Error:",err);
      let message = err.message;
      if (err.message.indexOf("duplicate key error") >= 0) {
        message = "用户名已存在";
      } else if (err.ValidationError) {
        message = err.ValidationError
      }
      return res.json({OK:false,message:message})
    }
    req.session.username = doc.username;
    req.session.userId = doc._id;
    console.log("DOC:",doc);
    return res.json({"OK":true,user:{
      _id:doc._id,
      username:doc.username
    }})
  })
})

module.exports = signup;