const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;


var AddingNewsDetails = new Schema({
    Id: ObjectId,
    GujCategory: { type: String, required: true  },
    EngCategory: {type: String,required: true},
    Path: { type: String, required: true },
    // VideoPath: { type: String, required: false },
    NewsTittle: { type: String, required: true },
    NewsSubTittle: { type: String, required: true },
    // Video: {Boolean:false,  required: false},
    News:{ type: String, required: true },
    CreatedDate: {
      type: Date,
      default: Date.now,
    },
  });

  const AddingNewsDetail = mongoose.model("AddingNewsDetail", AddingNewsDetails); 
module.exports = AddingNewsDetail;