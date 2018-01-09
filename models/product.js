const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    default: "件"
  },
  storage: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tag: {
    type: [],
    required: true,
  },
  images: {
    type: [],
    required: true,
    min: 1,
  },
  info: {
    type: String,
    required: true,
  },
  status: Boolean,
  createAt: {
    type: Date,
    default: Date.now,
  }
})
// 汽车详情
/* {
 *   topSpeed: {
 *     type: Number,
 *     required: true,
 *   },
 *   oilWear: {
 *     type: Number,
 *     required: true,
 *   },
 *   power: {
 *     type: Number,
 *     required: true,
 *   },
 *   zeroTo100: {
 *     type: Numver,
 *     required: true
 *   },
 *   exteriorColor: [String],
 *   customColor: [String],
 *   interiorColor: [String]
 * }*/

const ProductModel = mongoose.model("product", ProductSchema, "product");

module.exports = ProductModel;
