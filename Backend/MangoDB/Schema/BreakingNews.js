const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var Breaking = new Schema({
  Id: ObjectId,
  SrNo: { type: Number,  unique: true, min: 0, max: 10 },
  Title: { type: String, required: true },
  News: { type: String, required: true },
  Submitted: { type: String, default: "Submited", required: true },
});

const BreakingNews = mongoose.model("BreakingNews", Breaking);
module.exports = BreakingNews;
