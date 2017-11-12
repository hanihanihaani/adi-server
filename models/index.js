const mongoose = require ('mongoose');
const UserModel = require ('./user');


const url = 'mongodb://localhost:27017/adi';

mongoose.Promise = global.Promise;

mongoose.connect(url,{
  useMongoClient:true,
})

UserModel.count()
.then ((num) => {
  if (num === 0){
      const admin = new UserModel({
        username:"admin",
        password:"admin",
      })
      admin.save();
  }
})
.catch ((err) =>{
   throw (err);
})

exports.UserModel = UserModel;