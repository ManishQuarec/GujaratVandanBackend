const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var AddingNews = new Schema({
  Id: ObjectId,
  SrNo: { type: Number,  },
  Path: { type: String, required: true },
  NewsPaperDate: { type: String, required: true },
  CreatedDate: {
    type: Date,
    default: Date.now,
  },
});

const AddingNewsPapers = mongoose.model("AddingNewsPapers", AddingNews); 
module.exports = AddingNewsPapers;