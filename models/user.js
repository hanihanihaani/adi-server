const mongoose = require ('mongoose');

const UserSchema = mongoose.Schema({
  username:{
    type:String,
    match:[/^[a-zA-Z][0-9a-zA-Z_-]{3,19}$/,"用户名必须是字母开头，可包含字母，数字下划线，长度为4-20位"],
    unique:true,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  email:{
    type:String
  },
  phone:{
    type:String,
    match:[/^1[3-8][0-9]{9}$/,"必须是正确的手机号"]
  },
  createAt:{
    type:Date,
    default:Date.now,
  },
  avatar:String
})

const UserModel = mongoose.model('user',UserSchema,'user');

module.exports = UserModel;