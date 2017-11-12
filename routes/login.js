const express = require ('express');
const login = express.Router();
const { UserModel } = require ('../models');

login.post ("/",function (req,res,next) {
  const reqJson = req.body;
  console.log("reqJson:",reqJson);
  UserModel.findOne({username:reqJson.username})
  .select({__v:0})
  .then ((doc) => {
    if (!doc) {
      console.log("Empety Doc");
      return res.json ({"OK":false,"message":"登录失败用户名不存在 User"+reqJson.username})
    }
    if (doc.password == reqJson.password) {
      req.session.userId = doc._id,
      req.session.username = doc.username,
      res.json({"OK":true,user:{
        _id:doc._id,
        username:doc.username,
        createAt:doc.createAt
      }})
    } else {
      return res.json ({"OK":false,"message":"登录失败密码错误 User"+reqJson.username})
    }
  })
  .catch ((err) => {
    console.log("Error:",err)
    next(err);
  })
})

module.exports = login;