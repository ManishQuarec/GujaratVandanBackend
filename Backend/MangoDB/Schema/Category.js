const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var AddingCategory = new Schema({
  Id: ObjectId,
  Category: { GujCategory : String , EngCategory: String},
//   SubCategory: [{ SubCategory: String }],
});

const AddingCategorys= mongoose.model("AddingCategorys", AddingCategory); 
module.exports = AddingCategorys;