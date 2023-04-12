const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var Videodb = new Schema({
    Id: ObjectId,
    GujCategory: { type: String, required: true },
    EngCategory: { type: String, required: true },
    ImagePath: { type: String, required: true },
    Colored: { type: String, required: true },
    VideoPath: { type: String, required: true },
    NewsTittle: { type: String, required: true },
    NewsSubTittle: { type: String, required: true },
    CreatedDate: {
        type: String, required: true
    },
});
const Videodbs = mongoose.model("Videodbs", Videodb);
module.exports = Videodbs;
